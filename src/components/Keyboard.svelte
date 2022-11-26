<script>

    import { each } from "svelte/internal";
    import Key from "./Key.svelte";

    const fundFreq = 400

    const getMainPitches = (fundamental)=>{
        const pitches = []
        // main frequency should just be fundamental
        const fund = fundamental;
        pitches.push(fund);
        // then pick up the octave
        const octave = fundamental * 2;
        pitches.push(octave);
        let i = 3;
        let testPitch = fund * i;
        while(pitches.length <= 8){
            if(testPitch > octave){
                testPitch /= 2;
                continue;
            }
            if(!pitches.includes(testPitch)){
                pitches.push(testPitch)
            }
            i++;
            testPitch = fund * i;
        }
        return pitches;
    }

    const getHarmonic = (pitch, fund) =>{
        return getMainPitches(fund).indexOf(pitch)
    }

    const noteMap = (freq) =>{
        return getMainPitches(freq).sort((a, b) => a-b).map((x) =>{
            return {type: 'sine', frequency: x, decay: 1, fundamental: freq, harmonic: getHarmonic(x, freq)}
        })
    }

    let testButton = ''

    const keyboardMap = [

    ]

</script>

<style>

</style>

<h1>This is Keyboard</h1>

<h2>Fundamental</h2>
{#each noteMap(fundFreq) as noteProps}
    <Key props={noteProps}/>
{/each}
<h3>Dominant</h3>
{#each noteMap(fundFreq*1.5) as noteProps}
    <Key props={noteProps} hFunc={'dominant'}/>
{/each}