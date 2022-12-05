<script>

    import { each } from "svelte/internal";
    import Key from "./Key.svelte";
    import * as Tone from 'tone'

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
            return { frequency: x, fundamental: freq, harmonic: getHarmonic(x, freq) }
        })
    }


</script>

<style>

</style>

<h1>PolyKey</h1>

<h2>Tonic</h2>
{#each noteMap(fundFreq/2) as noteProps}
    <Key props={noteProps}/>
{/each}<br>
{#each noteMap(fundFreq) as noteProps}
    <Key props={noteProps}/>
{/each}<br>
{#each noteMap(fundFreq*2) as noteProps}
    <Key props={noteProps}/>
{/each}

<h2>Dominant</h2>
{#each noteMap((fundFreq*1.5)/2) as noteProps}
    <Key props={noteProps} hFunc={'dominant'}/>
{/each}<br>
{#each noteMap(fundFreq*1.5) as noteProps}
    <Key props={noteProps} hFunc={'dominant'}/>
{/each}<br>
<h2>Lower Mediant</h2>
{#each noteMap(fundFreq*1.25) as noteProps}
    <Key props={noteProps} hFunc={'lmediant'}/>
{/each}
<h2>Upper Mediant</h2>
{#each noteMap(fundFreq*1.75) as noteProps}
    <Key props={noteProps} hFunc={'umediant'}/>
{/each}

<!-- Please leave this in. I'm experimenting without these but don't want to redo math -->


<h2>Supertonic</h2>
{#each noteMap(fundFreq*1.125) as noteProps}
    <Key props={noteProps} hFunc={'supertonic'}/>
{/each}
<h2>Subtonic</h2>
{#each noteMap(fundFreq*1.875) as noteProps}
    <Key props={noteProps} hFunc={'subtonic'}/>
{/each}
<h2>Subdominant</h2>
{#each noteMap(fundFreq*1.375) as noteProps}
    <Key props={noteProps} hFunc={'subdominant'}/>
{/each}
<h2>Superdominant</h2>
{#each noteMap(fundFreq*1.625) as noteProps}
    <Key props={noteProps} hFunc={'superdominant'}/>
{/each}