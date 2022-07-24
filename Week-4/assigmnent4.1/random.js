const states={
  PENDING:'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

const isThenable = maybePromise => maybePromise && typeof maybePromise.then === 'function';

class newPromises{
  constructor(computation){
      this._state = states.PENDING;
      
      this._value = undefined;
      this._reason = undefined;

      this._thenQueue =[];
      this._finallyQueue=[];

      if(typeof computation === 'function'){
          setTimeout(()=>{
              try{
                  computation(
                     this._onFulfilled.bind(this),
                     this._onRejected.bind(this) 
                  );
              }catch (ex){
                  this._onFulfilled.bind(this),
                  this._onRejected.bind(this)
              }
          } );
      }
  }

  then(fufilledFn,catchFn){
      const controlledPromise= new newPromises();
      this._thenQueue.push([controlledPromise,fufilledFn,catchFn]);
      if(this._state===states.FULFILLED){
          this._propogateFulfilled();
      } else if(this._state===states.REJECTED){
          this._propogateRejected();
      }
      return controlledPromise;
  }
  
  catch(catchFn){
      return this.then(undefined,catchFn);
  
  }
  
  finally(sideEffectFn){
      if(this._state !== states.PENDING){
          sideEffectFn();
          return this._state === states.FULFILLED
      ?newPromises.resolve(this._value)
      :newPromises.reject(this._reason)
      }
      const controlledPromise = new newPromises()
      this._finallyQueue.push([controlledPromise,sideEffectFn]);

      return controlledPromise;
  }

  _propogateFulfilled(){
      this._thenQueue.forEach(([controlledPromise,fufilledFn])=>{
          if(typeof fufilledFn === 'function'){
              const valueorPromise =fufilledFn(this._value);

              if(isThenable(valueorPromise)){
                  valueorPromise.then(
                      value => controlledPromise._onFulfilled(value),
                      reason => controlledPromise._onRejected(reason)
                  );
              } else {
                  controlledPromise._onFulfilled(valueorPromise);
          }
          }else {
              return controlledPromise._onFulfilled(this._value);
          }
      });
      this._finallyQueue.forEach(([controlledPromise,sideEffectFn])=>{
          sideEffectFn();
          controlledPromise._onFulfilled(this._value);
      });
      this._thenQueue=[];
      this._finallyQueue=[];
  }
  _propogagteRejected(){
      this._thenQueue.forEach(([controlledPromise, _, catchFn]) => {
          if (typeof catchFn === 'function') {
            const valueOrPromise = catchFn(this._reason);
    
            if (isThenable(valueOrPromise)) {
              valueOrPromise.then(
                value => controlledPromise._onFulfilled(value),
                reason => controlledPromise._onRejected(reason)
              );
            } else {
              controlledPromise._onFulfilled(valueOrPromise);
            }
          } else {
            return controlledPromise._onRejected(this._reason);
          }
        });
    
        this._finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
          sideEffectFn();
          controlledPromise._onRejected(this._value);
        });
    
        this._thenQueue = [];
        this._finallyQueue = [];
  }
  
  _onFulfilled(value){
      if(this._state===states.PENDING){
          this._state=states.FULFILLED;
          this._value=value;
          this._propogateFulfilled();
          return this._value;
      }
      
  }
  
  _onRejected(reason){
      if(this._state===states.PENDING){
          this._state=states.REJECTED;
          this._reason=reason;
          this._propogagteRejected();
          return this._reason;
      }
  }
}

const getNumber = () => {
  return new newPromises((onResolve, onReject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 90000) + 10000;
  
      if (randomNumber % 5 === 0) {
        onReject(randomNumber);
      } else {
        onResolve(randomNumber);
      }
    }, 100);
  });
};


getNumber()
  .then((value) => {
    console.log(`${value} is not divisible by 5`);
    return;
  })
  .catch((reason) => {
    console.log(`${reason} is divisible by 5`);
  })
  .finally(()=>{
      console.log("finally in settlement")
  });