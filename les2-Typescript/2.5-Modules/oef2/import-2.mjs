import { GestructureerdeMededeling as GesMed } from "./klasse-export-2.mjs";
let message = new GesMed(2023, 1234, 567);
console.log(`Initial message: ${message.generate()}`);
message.separator = "-";
message.decorator = "*";
message.jaar = 2024;
message.klantNr = 2345;
message.bestelNr = 678;
console.log(`Updated message: ${message.generate()}`);
// Example output
// Initial message: +++023/1234/56750+++
// Updated message: ***024-2345-67805***
