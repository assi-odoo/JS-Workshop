const {Component, mount, xml,reactive, useEnv, useState} = owl;

let Choices = ["rock", "paper", "scissor"];
let randomizeChoice = Math.floor(Math.random() * Choices.length);

rand = Choices[randomizeChoice];
console.log(rand);

d = ['You Loose !','You Won','you guys are draw  &#128512;'];

class DataStr{
}

const createData = ()=>{
    return reactive(new DataStr);
}

const Final = ()=>{
    const data = useEnv();
    return useState(data);
}

class ShowData extends Component{
    static template = xml`
        <p t-esc ="props.data.list" class="text-center font-weight-bold h1 mt-4"></p>
    `;

    static props = ['data'];
}

class Main extends Component{
    static template = xml`
    <input type="text" class="form-control w-50" id="get"/>
    <button t-on-click="Clickme" class="btn bg-primary text-white mt-3">Submit</button>
    <ShowData data='state'/>
    `;

    setup(){
        this.out='';
        this.goal = Final();
        this.state = useState({
            list : this.out,
          });
    }

    Clickme(){
        const val = document.getElementById('get').value;
        // console.log(val);
        let out;
        if(!val){
            alert("you can't leave empty!");
        }
        else if(val == 'rock' && rand== 'paper'){
            this.out = d[0];
            
            console.log(d[0]);
        }
        else if(val == 'paper' && rand== 'rock'){
            this.out =d[1];
            console.log(d[1]);

        }
        else if(val == 'scissor' && rand== 'paper'){
            this.out = d[1];
            console.log(d[1]);

        }
        else if(val == 'paper' && rand== 'scissor'){
            this.out =d[0];
            console.log(d[0]);

        }
        else if(val == 'rock' && rand== 'scissor'){
            this.out =d[1];
            console.log(d[1]);
        }
        else if(val == 'scissor' && rand== 'rock'){
            this.out =d[0];
            console.log(d[0]);
        }
        else if(val ==  rand){
            this.out =d[2];
            this.state.list =out;
            console.log(d[2]);
        }
        else{
            this.out= 'Invalid Input';
            console.log(`Invalid Input`);
        }
        
    }

    static components = {ShowData};
}

const env={store :createData()};
mount(Main,document.body,{dev:true,env});





















