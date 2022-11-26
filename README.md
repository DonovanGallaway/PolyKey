# PolyKey
Eventually this will have more stuff. For now it's just my notes.

## The Background
The core concept is to build a more natural scale based directly on the harmonic series. I remember in high school my friends and I talked a lot about the harmonic series, about overtones, about the stagnation of Western tonality. Schoenbergs interpretations of harmony in particular were interesting, but you couldn't make it sound good.

What's funny is that even mid-late Romantic era textbooks, as well as all of these modern interpretations, start with the notion of the harmonic series. That a note, doubled in frequency, with it's pseudo-squares as octaves and its other doublings as harmonic series notes, are the basis for what we find sonically pleasing. A simple enough notion, challenged frequently by cultural standards. But an outright LIE that it is the basis of Western tonality.

I haven't been able to track down exactly where it got dropped or why nobody seemed to make this a bigger deal. My assumptions are 1) our Western harmony has its roots in church modes, where twelve and seven are sacred numbers 2) correcting this injustice to make anything but really boring music required some VERY precise tuning.

I've had this idea rattling around for some years now and just now really have the combination of musical know-how, coding experience, free time and inspiration necessary to make it a reality. I hope you find it as interesting as I do.

## The Gist
As above, the idea is that you take, for a given fundamental frequency, an overtone series of that fundamental. From there, you select your number of notes required (some power of 2). To keep in concept with Western Harmony and have access to similar tones, I  have selected 8 notes in the scale (nine with the "octave"). (Fuck I'm going to have to rename that)

From there, I have additionally built out harmonic series based on the notes in that harmonic series. This gives you your chromatic tones. Even though they don't go on proper chromatic scales, you can very freely modulate and create some very interesting harmonic aspects.

## Possible Performance Notes
Obviously this is very early days. I coded this up in a few hours. There is little thought to user experience or playability, especially if we start talking about physical instruments (which I once considered potentially unfeasible). This will be tweaked as I go, but for now I will likely just implement a basic keyboard UI.

The colors are similarly selected for ease of spotting relevant notes, but not necessarily final nor optimal. Really it's just to give me something to stop the walls from spinning in trying to see what matches in what harmonic series.

## Heavy Theory Notes
This is mostly just stuff I find interesting.

Application is currently broken down to the tonic, as well as Dominant, Sub/Supertonic, and Lower/Upper Mediant scale functions. I thought about breaking it further and overtoning out the last two of the tonic (what would be the subdominant and superdominant scales), but they don't appear to have any overlap in either direction with any of the other scale functions. As such, I cannot conceive of their use in this early stage of development.

There is an interesting fact which is causing me to pause and add something on this, namely that the Subtonic appears to be pretty tonally useful in scale-building and arpeggios. Since it falls at eigth in the tonic harmonic set, I assumed that it would be of little use (like the sub/superdominant scales). However, it has a great deal of overlap with the dominant as well as mediant scales, and so is more immediately useful in my eyes for modulation.

## Housekeeping Notes
For me or anyone who wants to help with bugfixes/optimization

- Activating a note repeatedly and quickly causes a sharp noise to occur
- Adding keybindings to stuff to play the keyboard more like a piano
- Moving that godawful styling case/elseif nightmare to some more readable separate helper function(s)
- Chord functionality
- General code refactoring/cleanup/optimization
- Ability to dynamically change the fundamental, as well as the wave form
- More optimized octave ranges/arrangements
- Show/hide chromatic functions as needed/desired
- Ability to add octave ranges for any function as needed/desired