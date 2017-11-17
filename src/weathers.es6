const WEATHERS = {
    SUN: "Sunny",
    RAIN: "Raining",
    SNOW: "Snowing",
    CLOUD: "Cloudy",
    FOG: "Fogging",
    HAIL: "Hailing",
    STORM: "Stroming",
    WIND: "Windy",
    BREEZE: "Breezeing",
    RANDOM: "Random",
    STAR: "Star",
    TWILIGHT: "Twilight",
    MIDNIGHT: "Midnight",
    NOVA: "Nova",
    ROSE: "Rose",
    CHAOS: "Chaos",
    NUM: function (number) {
        switch (number % 15) {
            case 0:
                return WEATHERS.SUN;
            case 1:
                return WEATHERS.RAIN;
            case 2:
                return WEATHERS.SNOW;
            case 3:
                return WEATHERS.CLOUD;
            case 4:
                return WEATHERS.FOG;
            case 5:
                return WEATHERS.HAIL;
            case 6:
                return WEATHERS.STORM;
            case 7:
                return WEATHERS.WIND;
            case 8:
                return WEATHERS.BREEZE;
            case 9:
                return WEATHERS.STAR;
            case 10:
                return WEATHERS.TWILIGHT;
            case 11:
                return WEATHERS.MIDNIGHT;
            case 12:
                return WEATHERS.NOVA;
            case 13:
                return WEATHERS.ROSE;
            case 14:
                return WEATHERS.CHAOS;
            default:
                return WEATHERS.RANDOM;
        }
    }
}
export default WEATHERS;