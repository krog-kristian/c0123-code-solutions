select "a"."line1",
       "a"."district",
       "c"."name" as "cityName",
       "n"."name" as "nation"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "n" using ("countryId");
