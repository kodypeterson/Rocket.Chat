RocketChat.callbacks.add('livechat.offlineMessage', (data) => {
	if (!RocketChat.settings.get('Livechat_webhook_on_offline_msg')) {
		return data;
	}

	let postData = {
		type: 'LivechatOfflineMessage',
		sentAt: new Date(),
		visitor: {
			name: data.name,
			email: data.email
		},
		message: data.message
	};

	RocketChat.Livechat.sendRequest(postData);
});
