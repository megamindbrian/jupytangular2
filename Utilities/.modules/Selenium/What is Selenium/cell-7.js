if (typeof client !== 'undefined') {
    client.url('https://purchasesprint.actops.com');
    client.click('[href*="/auth"], [routerlink*="/auth"]');
    module.exports = client;
}