class Note {
    constructor(type, frequency, decay){
        this.type = type
        this.frequency = frequency
        this.decay = decay
        this.context = new AudioContext();
        this.o = context.createOscillator();
        this.o.frequency.value = this.frequency
        this.g = context.createGain();
        this.o.connect(this.g)
        this.g.connect(context.destination);
    }

    playNote() {
        o.start(0);
        // @ts-ignore
        g.exponentialRampToValueAtTime(
            0.0001, this.context.currentTime + this.decay
        )
    }
}


const generateKeySound = () =>{
    const context = new AudioContext();
    const o = context.createOscillator();
    const g = context.createGain();
    // @ts-ignore
    o.type = type;
    o.connect(g);
    g.connect(context.destination);
}
const context = new AudioContext();
const o = context.createOscillator();
const g = context.createGain();
o.type = 'sine';
o.connect(g);
g.connect(context.destination);

const stopSound = (g, context)=>{
    g.gain.exponentialRampToValueAtTime(
        0.0001, context.currentTime + 1
    )
}