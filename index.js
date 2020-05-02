 
/**
 * Pantheon Terminus Composer Setup
 *
 * @package setupPantheonTerminusComposer
 */

// External Dependencies
const core = require( '@actions/core' );
const exec = require( '@actions/exec' );

async function run() {
	try {
		await exec.exec('mkdir -p ~/.terminus/plugins');
		await exec.exec('composer create-project --no-dev -d ~/.terminus/plugins pantheon-systems/terminus-composer-plugin:~1');
	} catch ( error ) {
		core.setFailed( error.message );
	}
}

