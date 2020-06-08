// Stub to allow overriding of Parser for post-processing
export var Parser = null;

// if check config import override
// else
import { Parser as orgaParser } from "orga";
Parser = orgaParser
