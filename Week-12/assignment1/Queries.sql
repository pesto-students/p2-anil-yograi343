Q1: Find the item that has minimum weight.
SELECT DISTINCT ITEMNO, 
DESCRIPTION FROM ITEMS 
WHERE WEIGHT = (
SELECT MIN(WEIGHT)
 FROM ITEMS);

Q2: Find the different Warehouses in "pune".
Select wname
from Warehouses
where lower(location)="pune";

Q3: Find the details of items orderd by a cutomer "Mr. Patil"
SELECT * FROM ITEMS WHERE ONO=(SELECT ONO FROM ORDERS WHERE
CNO=SELECT CNO FROM CUSTOMER WHERE CNAME="PATIL"));


Q4: Find a Warehouse which has maximum stores.
Select * from warehouses w
    inner join
    (select wid, count(wid)
    from stores
    group by wid limit 1)
    stores
    on wid.store=stores.wid;

Q5: Find an item which is orderd for a minimum number of times.

SELECT description, min(cnt) as count from
(select description, count(description) as cnt
 from items 
 group by description)items;


Q6: Find the detailed orders given by each customer.
select CNAME,O.*,I.*
FROM CUSTOMER AS C inner JOIN ORDERS AS O 
ON C.NO=O.CNO inner JOIN ITEMS AS I ON 0.ONO =I.ONO;
