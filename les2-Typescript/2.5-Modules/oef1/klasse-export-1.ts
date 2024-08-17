export class GestructureerdeMededeling {
  private _sep: string;
  private _dec: string;
  private _jaar: number;
  private _klantNr: number;
  private _bestelNr: number;
  private _checksum: string;
  private _codes: string[] = ["", "", ""];

  constructor(
    jaar: number = 0,
    klantNr: number = 0,
    bestelNr: number = 0,
    sep: string = "/",
    dec: string = "+"
  ) {
    this._jaar = jaar;
    this._klantNr = klantNr;
    this._bestelNr = bestelNr;
    this._sep = sep;
    this._dec = dec;

    this.generate_base();
    this._checksum = this.calculateChecksum();
  }

  private calculateChecksum(): string {
    return (this.combinednumber % 97).toString().padStart(2, "0");
  }

  public get combinednumber() {
    return parseInt(this._codes.join(""));
  }

  public get checksum() {
    return this._checksum;
  }

  public set separator(sep: string) {
    this._sep = sep;
  }

  public get separator() {
    return this._sep;
  }

  public set decorator(dec: string) {
    this._dec = dec;
  }

  public get decorator() {
    return this._dec;
  }

  public set jaar(jaar: number) {
    this._jaar = jaar;
    this.generate_base();
  }
  public get jaar() {
    return this._jaar;
  }

  public set klantNr(klantNr: number) {
    this._klantNr = klantNr;
    this.generate_base();
  }
  public get klantNr() {
    return this._klantNr;
  }

  public set bestelNr(bestelNr: number) {
    this._bestelNr = bestelNr;
    this.generate_base();
  }
  public get bestelNr() {
    return this._bestelNr;
  }

  private generate_base() {
    this._codes[0] = this._jaar.toString().slice(-3).padStart(3, "0");
    this._codes[1] = this._klantNr.toString().slice(-4).padStart(4, "0");
    this._codes[2] = this._bestelNr.toString().slice(-3).padStart(3, "0");
    this._checksum = this.calculateChecksum(); // Recalculate checksum after updating codes
  }

  public generate() {
    return (
      this._dec.repeat(3) +
      (this._codes.join(this._sep) + this._checksum) +
      this._dec.repeat(3)
    );
  }
}