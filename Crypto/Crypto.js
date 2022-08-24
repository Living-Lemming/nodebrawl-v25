import { crypto_box_afternm, crypto_box_beforenm, crypto_scalarmult_base, crypto_box_open_afternm, crypto_box_NONCEBYTES, crypto_hash, crypto_secretbox, crypto_secretbox_open } from "tweetnacl";

let ServerKey = bytes.from_hex("key");
let ClientSK = bytes.from_hex("key");
let ClientPK = crypto_scalarmult_base(ClientSK);
let SessionKey = Buffer.from("key", "hex");

