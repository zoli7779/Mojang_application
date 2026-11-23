// sound_effect_player.js
export class SoundEffectPlayer {
    /**
     * @param {string} audioSrc - The path or URL to the audio file
     */
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
        this.audio.preload = 'auto';
    }

    /**
     * Plays the sound. If it's already playing, it restarts from the beginning.
     */
    play() {
        this.audio.currentTime = 0;
        this.audio.play().catch(error => {
            console.warn("Playback prevented or failed:", error);
        });
    }

    /**
     * Stops the audio completely and resets it.
     */
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
}