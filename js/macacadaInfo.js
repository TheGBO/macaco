export default class MacacadaInfo {
    constructor(config) {
        this.amount = config.amount;
        this.rainbowMode = config.rainbowMode;
        this.intervalMs = config.intervalMs;
        this.minCharCode = config.minCharCode;
        this.maxCharCode = config.maxCharCode;
        this.spaceRate = config.spaceRate;
    }
}