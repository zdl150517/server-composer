export const ServerComposer = () => {
	return (
		<div className="server-composer">
			<h1>Server Composer</h1>
			<form className="config">
				<label htmlFor="cpu">CPU</label>
				<select name="cpu">
					<option value="x86">X86</option>
					<option value="power">Power</option>
					<option value="arm">ARM</option>
				</select>
				<label htmlFor="memory">Memory Size</label>
				<input type="text" id="memory" name="memory" />
				<label htmlFor="gpu">GPU Accelerator Card</label>
				<input type="checkbox" id="gpu" name="gpu" />
			</form>
			<hr />
			<h1>Server Model Options</h1>
			<ul>
				<li>Tower Server</li>
				<li>4U Rack Server</li>
				<li>Mainframe</li>
			</ul>
		</div>
	);
};
