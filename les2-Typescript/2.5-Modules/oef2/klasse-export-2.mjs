class GestructureerdeMededeling {
    _sep;
    _dec;
    _jaar;
    _klantNr;
    _bestelNr;
    _checksum;
    _codes = ["", "", ""];
    constructor(jaar = 0, klantNr = 0, bestelNr = 0, sep = "/", dec = "+") {
        this._jaar = jaar;
        this._klantNr = klantNr;
        this._bestelNr = bestelNr;
        this._sep = sep;
        this._dec = dec;
        this.generate_base();
        this._checksum = this.calculateChecksum();
    }
    calculateChecksum() {
        return (this.combinednumber % 97).toString().padStart(2, "0");
    }
    get combinednumber() {
        return parseInt(this._codes.join(""));
    }
    get checksum() {
        return this._checksum;
    }
    set separator(sep) {
        this._sep = sep;
    }
    get separator() {
        return this._sep;
    }
    set decorator(dec) {
        this._dec = dec;
    }
    get decorator() {
        return this._dec;
    }
    set jaar(jaar) {
        this._jaar = jaar;
        this.generate_base();
    }
    get jaar() {
        return this._jaar;
    }
    set klantNr(klantNr) {
        this._klantNr = klantNr;
        this.generate_base();
    }
    get klantNr() {
        return this._klantNr;
    }
    set bestelNr(bestelNr) {
        this._bestelNr = bestelNr;
        this.generate_base();
    }
    get bestelNr() {
        return this._bestelNr;
    }
    generate_base() {
        this._codes[0] = this._jaar.toString().slice(-3).padStart(3, "0");
        this._codes[1] = this._klantNr.toString().slice(-4).padStart(4, "0");
        this._codes[2] = this._bestelNr.toString().slice(-3).padStart(3, "0");
        this._checksum = this.calculateChecksum(); // Recalculate checksum after updating codes
    }
    generate() {
        return (this._dec.repeat(3) +
            (this._codes.join(this._sep) + this._checksum) +
            this._dec.repeat(3));
    }
}
export { GestructureerdeMededeling };
