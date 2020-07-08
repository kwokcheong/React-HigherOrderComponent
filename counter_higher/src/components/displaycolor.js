//Understanding rest operator. We learnt that we have to use ...this.props to bring out the other arguements, what does ... do?
//it is a rest operator, so we have an initial argument called message, javascript allows for any amt of arguements, we use ...colors to grab the rest of the arguements!
//rest operator combines all the extra params and puts them into an array, Spread operator takes all the params and splits them into individual elements
let displayColor = function(message, ...colors){
    console.log(message)
    console.log(colors)
    for (let i in colors){
        console.log(colors[i]);
    }
}


export default displayColor;