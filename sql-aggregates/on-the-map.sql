select count("countryId"),
       "n"."name" as "nation"
from "countries" as "n"
join "cities" using ("countryId")
group by "n"."countryId";
