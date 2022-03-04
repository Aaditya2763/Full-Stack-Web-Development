
const mongoose=require('mongoose');
const movie = require('./model/movies');


const dummy_movies=[
    {
      
          
             year: 1997,
               genres: [ 'Drama', 'Romance' ],
               rated: 'PG-13',
               languages: [ 'English', 'French', 'German', 'Swedish', 'Italian', 'Russian' ],
         
               awards: {
                  wins: 127,
                  nominations: 63,
                  text: 'Won 11 Oscars. Another 116 wins & 63 nominations.'
               },
               cast: [ 'Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane', 'Kathy Bates' ],
               directors: [ 'James Cameron' ]
            },
            {
               title: 'The Dark Knight',
               year: 2008,
               genres: [ 'Action', 'Crime', 'Drama' ],
               rated: 'PG-13',
               languages: [ 'English', 'Mandarin' ],
            
               awards: {
                  wins: 144,
                  nominations: 106,
                  text: 'Won 2 Oscars. Another 142 wins & 106 nominations.'
               },
               cast: [ 'Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine' ],
               directors: [ 'Christopher Nolan' ]
            },
            {
               title: 'Spirited Away',
               year: 2001,
               genres: [ 'Animation', 'Adventure', 'Family' ],
               rated: 'PG',
               languages: [ 'Japanese' ],
               
               awards: {
                  wins: 52,
                  nominations: 22,
                  text: 'Won 1 Oscar. Another 51 wins & 22 nominations.'
               },
               cast: [ 'Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki', 'Takashi Naitè' ],
               directors: [ 'Hayao Miyazaki' ]
            },
            {
               title: 'Casablanca',
               genres: [ 'Drama', 'Romance', 'War' ],
               rated: 'PG',
               cast: [ 'Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid', 'Claude Rains' ],
               languages: [ 'English', 'French', 'German', 'Italian' ],
              
               directors: [ 'Michael Curtiz' ],
               awards: {
                  wins: 9,
                  nominations: 6,
                  text: 'Won 3 Oscars. Another 6 wins & 6 nominations.'
               },
               lastupdated: '2015-09-04 00:22:54.600000000',
               year: 1942
            }
            
  
]

async function SeedMovies(){
   await movie.deleteMany({});  //we always work on model to perform operation on db
  await movie.insertMany(dummy_movies)
   
 
   console.log("movie seeded sucessfully")
}


module.exports=SeedMovies;