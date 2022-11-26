<script>
// @ts-nocheck


    export let props
    export let hFunc = 'tonic'

    const {type, frequency, decay, fundamental, harmonic} = props

    let context, o, g;

    const generateSound = () =>{
        context = new AudioContext();
        o = context.createOscillator();
        g = context.createGain();
        o.type = type;
        o.frequency.value = frequency;
        o.connect(g);
        g.connect(context.destination);
    }

    generateSound()

    const playNote = () => {
        o.start(0);
        g.gain.exponentialRampToValueAtTime(
            0.0001, context.currentTime + decay
        )
        generateSound();
    }

    const getStyle = ()=>{
        //good god optimize this plz
        const styleMap = {}
        if(hFunc === 'tonic'){
        switch(harmonic){
            case 0:
            case 1:
                styleMap.color = 'rgb(255,255,255)'
                styleMap.text = 'black'
                break;
            case 2:
                styleMap.color = 'rgb(200,255,200)'
                styleMap.text = 'black'
                break;
            case 3:
                styleMap.color = 'rgb(200,255,255)'
                styleMap.text = 'black'
                break;
            case 4:
                styleMap.color = 'rgb(150,150,150)'
                styleMap.text = 'black'
                break;
            case 5:
                styleMap.color = 'rgb(125,255,125)'
                styleMap.text = 'black'
                break;
            case 6:
            case 7:
                styleMap.color = 'rgb(100,100,100)'
                styleMap.text = 'black'
                break;
            case 8:
                styleMap.color = 'rgb(255,200,200)'
                styleMap.text = 'black'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }} else if(hFunc === 'dominant'){
            switch(harmonic){
            case 0:
            case 1:
                styleMap.color = 'rgb(200,255,200)'
                styleMap.text = 'black'
                break;
            case 2:
                styleMap.color = 'rgb(125,255,125)'
                styleMap.text = 'black'
                break;
            case 3:
                styleMap.color = 'rgb(255,200,200)'
                styleMap.text = 'black'
                break;
            case 4:
                styleMap.color = 'rgb(75,200,75)'
                styleMap.text = 'black'
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                styleMap.color = 'rgb(100,100,100)'
                styleMap.text = 'black'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }} else if(hFunc === 'subdominant'){
            switch(harmonic){
            case 0:
            case 1:
                styleMap.color = 'rgb(200,255,255)'
                styleMap.text = 'black'
                break;
            case 2:
                styleMap.color = 'rgb(255,200,200)'
                styleMap.text = 'black'
                break;
            case 3:
            case 4:
                styleMap.color = 'rgb(0,0,150)'
                styleMap.text = 'black'
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                styleMap.color = 'rgb(0,0,50)'
                styleMap.text = 'black'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }}
        
        return styleMap
    }
</script>

<style>
    button{
        border: 1px solid black;
    }
</style>

<button style="background: {getStyle().color}; color: {getStyle().text}" on:click={playNote}>F: {frequency} H: {harmonic}</button>
