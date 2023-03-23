select count("filmId"),
       "genres"."name" as "genre"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where ("firstName" = 'Lisa') AND ("lastName" = 'Monroe')
group by "genres"."name";
