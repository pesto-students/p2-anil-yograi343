class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    index=-1
    buildTree(array){
        this.index+=1;
        if(array[this.index]===-1){
            return null;
        }
        let node = new Node(array[this.index]);
        node.left=this.buildTree(array);
        node.right=this.buildTree(array);

        return node;
    }
    depthBinaryTree(root){
        if(root===null)
            return 0;
        return Math.max(this.depthBinaryTree(root.left),this.depthBinaryTree(root.right))+1;
    }
}

const preorder1=[1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1];
const preorder2=[3,9,20,-1,-1,15,7];
const preorder3=[1,-1,2];
const tree=new BinaryTree();
const tree2=new BinaryTree();
const root=tree.buildTree(preorder1);
//const root2=tree2.buildTree(preorder2)
console.log("Depth for 1st preorder "+tree.depthBinaryTree(root));//3
//console.log("Depth for 2nd preorder "+tree2.depthBinaryTree(root2));
