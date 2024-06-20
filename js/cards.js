// global variable
let thing;

const rooms = [
    {
        name: "farmhouse",
        description: "a cozy, cottage-like house.",
    },
    {
        name: "outdoor kitchen",
        description: "yummy stuff happens here.",
    }
]

const items = [
    {
        name: "wrench",
        description: "handy for wrenching",
        type: "weapon",
        action: "", // put the function it calls here
        icon: "fa-wrench",
    },
    {
        name: "gavel",
        description: "make them grovel with this gavel",
        type: "weapon",
        action: "",
        icon: "fa-gavel"
    },
    {
        name: "potion of healing",
        description: "One D4 healing",
        type: "potion",
        icon: '<i class="fa-solid fa-vial"></i>',
    },
    {
        name: "potion of mega healing",
        description: "One D12 healing, so big",
        type: "potion",
        icon: '<i class="fa-solid fa-flask"></i>',
    },
    {
        name: "ticket",
        description: "these usually get you into something where there are other people",
        icon: "fa-ticket"
    },
    {
        name: "shield",
        description: "one protecty thing",
        icon: "fa-sheild" //fa-solid fa-shield
    },
    {
        name: "wand",
        description: "1d3 magical damage random fire or ice one use",
        icon: '<i class="fa-solid fa-wand-sparkles"></i>'
    },
    {
        name: "scout",
        description: "a scout is a scout is a scout",
        type: "armor",
        icon: '<i class="fa-solid fa-vest-patches"></i>'
    },
    {
        name: "hammer",
        description: "weapon",
        icon: '<i class="fa-solid fa-hammer"></i>'
    },
    {
        name: "scroll  ",
        description: "",
        icon: '<i class="fa-solid fa-scroll"></i>'
    },
    {
        name: "scissors",
        description: "there is a reason why teachers are weird about these things",
        type: "weapon",
        action: "",
        icon: '<i class="fa-solid fa-scissors"></i>'
    },
]

const heros = [
    {
        name: "cleric",
        movementSpeed: 5,
        icon: '<i class="fa-solid fa-user-nurse fa-2xl"></i>'
    },
    {
        name: "scholar",
        movementSpeed: 4,
        icon: '<i class="fa-solid fa-user-graduate fa-2xl"></i>'
    },
    {
        name: "astronaut",
        movementSpeed: 6,
        icon: '<i class="fa-solid fa-user-astronaut fa-2xl"></i>'
    },
];


const monsters = [
    {
        name: "dragon",
        icon: '<i class="fa-solid fa-dragon"></i>'
    },
    {
        name: "bug",
        icon: '<i class="fa-solid fa-bug"></i>'
    }
]

const obstacles = [
    {
        name: "tree",
        icon: "fa-tree"
    },
    {
        name: "building",
        icon: "fa-university"
    },
    {
        name: "dumpster fire",
        icon: '<i class="fa-solid fa-dumpster-fire"></i>'
    },
]

const randomEvents = [ 
    {
        name: "tornado",
        icon: '<i class="fa-solid fa-tornado"></i>'
    }
]


const blockerRemovers = [
    {
        name:"door",
        icon:'<i class="fa-solid fa-door-open"></i>'
    }
]
/// poo-storm anchor mountain-sun pencil  flag-checkered rocket water moon vials 

// certificate could be sun 

// stuff to show during actions or conditions
// dice user-shield user-injured sun moon 

// user