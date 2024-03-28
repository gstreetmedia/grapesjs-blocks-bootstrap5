export default (editor, config = {}) => {
	console.log("editor", editor);
	const c = config;
	const deviceManager = editor.DeviceManager;

	if (c.gridDevices) {
		/*
		deviceManager.add(
			{
				recordId: "xxl",
				name: "Desktop (XXL)",

			});

		 */
		deviceManager.add(
			{
				id: "xl",
				name: "Desktop (XL)",
				width: '1366px',
				mediaWidth: "1399px",
			});

		deviceManager.add(
			{
				id: "lg",
				name: "Tablet (LG)",
				width: '1180px',
				mediaWidth: "1199px",
			});
		deviceManager.add(
			{
				id: "md",
				name: "Tablet (MD)",
				width: '820px',
				mediaWidth: "819px",
			});
		deviceManager.add(
			{
				id: "mobile",
				name: "Mobile  (SM)",
				width: '390px',
				mediaWidth: "390px",
			});


		//deviceManager.remove("desktop");
		//deviceManager.remove("tablet");
		//deviceManager.remove("mobileLandscape");
		//deviceManager.remove("mobilePortrait");
		//const device = deviceManager.get('desktop');
		//deviceManager.select(device);
		return;


		if (c.gridDevicesPanel) {
			const panels = editor.Panels;
			const commands = editor.Commands;
			var panelDevices = panels.addPanel({id: 'devices-buttons'});
			var deviceBtns = panelDevices.get('buttons');
			deviceBtns.add([{
				id: 'deviceXl',
				command: 'set-device-xl',
				className: 'fa fa-desktop',
				text: 'XL',
				attributes: {'title': 'Extra Large'},
				active: 1
			}, {
				id: 'deviceLg',
				command: 'set-device-lg',
				className: 'fa fa-desktop',
				attributes: {'title': 'Large'}
			}, {
				id: 'deviceMd',
				command: 'set-device-md',
				className: 'fa fa-tablet',
				attributes: {'title': 'Medium'}
			}, {
				id: 'deviceSm',
				command: 'set-device-sm',
				className: 'fa fa-mobile',
				attributes: {'title': 'Small'}
			}, {
				id: 'deviceXs',
				command: 'set-device-xs',
				className: 'fa fa-mobile',
				attributes: {'title': 'Extra Small'}
			}]);

			commands.add('set-device-xs', {
				run: function (editor) {
					editor.setDevice('Extra Small');
				}
			});
			commands.add('set-device-sm', {
				run: function (editor) {
					editor.setDevice('Small');
				}
			});
			commands.add('set-device-md', {
				run: function (editor) {
					editor.setDevice('Medium');
				}
			});
			commands.add('set-device-lg', {
				run: function (editor) {
					editor.setDevice('Large');
				}
			});
			commands.add('set-device-xl', {
				run: function (editor) {
					editor.setDevice('Extra Large');
				}
			});
		}


	}
}
