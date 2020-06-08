// Stub to allow overriding of toHAST for post-processing
var toHast = null;

// if check config import override
// else
import { default as orgaToHast } from 'oast-to-hast'
toHast = orgaToHast

export default toHast