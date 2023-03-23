select sum("payments"."amount") as "totalSpent",
       "c"."firstName",
       "c"."lastName"
from "customers" as "c"
join "payments" using ("customerId")
group by "customerId"
order by "totalSpent" DESC;
