

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://image.tmdb.org/t/p/w154/2FJ6UmPQotU3ddAeDTq7iWlYJ8i.jpg", "https://imgix.ranker.com/user_node_img/4364/87264681/original/87264681-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375","https://cdn.comedy.co.uk/images/library/comedies/900x450/c/curse_the_poster.jpg"];
	 let action =["https://image.tmdb.org/t/p/w154/rF6GFVTyzH0HTgv0vWBKp0VpXRB.jpg", "https://imgix.ranker.com/user_node_img/4269/85376493/original/the-mandalorian-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375","http://rnkr.tmsimg.com/assets/p12633558_b_v12_ag.jpg"];
	 let drama =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGSPnxW31T6ZFbWjdkLIgZn-KW7ua97SSSw&usqp=CAU", "https://image.tmdb.org/t/p/w154/xP4oLUAL1x7qpatyKF8aZx4ZT65.jpg","https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/forecasting_love_and_weather_main.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);
});