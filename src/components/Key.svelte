<script>
// @ts-nocheck
    import * as Tone from 'tone'

    export let props
    export let hFunc = 'tonic'

    const { frequency, harmonic } = props

    const synth = new Tone.Synth().toDestination();

    

    const playNote = () => {
        const now = Tone.now();
        synth.triggerAttackRelease(frequency, '8n', now)
    }

    const getStyle = ()=>{
        //good god optimize this plz
        // or at least get it out of the file, fuck
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
                styleMap.color = 'rgb(255,255,150)'
                styleMap.text = 'black'
                break;
            case 5:
                styleMap.color = 'rgb(255,200,255)'
                styleMap.text = 'black'
                break;
            case 6:
                styleMap.color = 'rgb(255, 150, 51)'
                break;
            case 7:
                styleMap.color = 'rgb(51,150,255)'
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
                styleMap.color = 'rgb(230,230,0)'
                break;
            case 5:
                styleMap.color = 'rgb(255, 100, 255)'
                break;
            case 6:
                styleMap.color = 'rgb(200, 80, 30)'
                break;
            case 7:
                styleMap.color = 'rgb(30,80,200)'
                styleMap.text = 'black'
                break;
            case 8:
                styleMap.color = 'rgb(255, 100, 100)'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }} else if(hFunc === 'lmediant'){
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
                styleMap.text = 'white'
                break;
            case 5:
                styleMap.color = 'rgb(150, 50, 150)'
                styleMap.text = 'white'
                break;
            case 6:
            case 7:
            case 8:
                styleMap.color = 'rgb(0,0,50)'
                styleMap.text = 'white'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }} else if(hFunc === 'subtonic'){
            switch(harmonic){
            case 0:
            case 1:
                styleMap.color = 'rgb(255,200,200)'
                styleMap.text = 'black'
                break;
            case 2:
                styleMap.color = 'rgb(255, 100, 100)'
                break;
            case 3:
            case 4:
                styleMap.color = 'rgb(150, 50, 50)'
                styleMap.text = 'white'
                break;
            case 8:
                styleMap.color = 'rgb(100, 50, 50)'
                styleMap.text = 'white'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }} else if(hFunc === 'umediant'){
            switch(harmonic){
            case 0:
            case 1:
                styleMap.color = 'rgb(255,255,150)'
                styleMap.text = 'black'
                break;
            case 2:
                styleMap.color = 'rgb(230,230,0)'
                break;
            case 3:
            case 4:
                styleMap.color = 'rgb(150,150,0)'
                break;
            case 8:
                styleMap.color = 'rgb(150, 50, 50)'
                styleMap.text = 'white'
                break;
            default:
                styleMap.color = 'rgb(25,25,25)'
                styleMap.text = 'white'
                break;
        }} else if(hFunc === 'supertonic'){
            switch(harmonic){
            case 0:
            case 1:
                styleMap.color = 'rgb(255,200,255)'
                styleMap.text = 'black'
                break;
            case 2:
                styleMap.color = 'rgb(255, 100, 255)'
                break;
            case 3:
            case 4:
                styleMap.color = 'rgb(150, 50, 150)'
                styleMap.text = 'white'
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

<button style="background: {getStyle().color}; color: {getStyle().text}" on:click={playNote}>F: {frequency}</button>
