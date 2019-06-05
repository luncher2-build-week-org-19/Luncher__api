exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("schools")
        // .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("schools").insert([
                { image: "", schoolname: "Oak Ridge High School", userId: 1 },
                {
                    image:
                        "https://cdn.pixabay.com/photo/2014/04/03/00/43/lion-309219_960_720.png",
                    schoolname: "Boone High School",
                    userId: 2,
                },
                { image: "", schoolname: "Winter Park High School", userId: 2 },
                {
                    image: "",
                    schoolname: "Washington Middle School",
                    userId: 2,
                },
                { image: "", schoolname: "Walker Middle School", userId: 1 },
                {
                    image:
                        "https://i.pinimg.com/originals/ca/2f/19/ca2f19b5c0a37481a3a731a629fc2346.png",
                    schoolname: "Pine Hills Elementary School",
                    userId: 1,
                },
                {
                    image: "https://ctftime.org/media/team/raccoon3.png",
                    schoolname: "Meadow Creek Elementary School",
                    userId: 1,
                },
                {
                    image:
                        "https://www.clipartmax.com/png/middle/222-2220631_dragon-clipart-black-and-white-school-clipart-dragon-public-domain.png",
                    schoolname: "Southchase Elementary School",
                    userId: 2,
                },
            ]);
        });
};
