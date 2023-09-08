const authenticated = true;

if(authenticated) {
    console.log('The user is authenticated');
}

const score = 390;

function reviewScore() {
    if(score > 400) {
        console.log('Excellent!!');
        return;
    }
    
    if(score >300){
        console.log('Good score... Congratulations');
        return;
    }
}

reviewScore();

