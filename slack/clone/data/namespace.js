const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

const wikiNs = new Namespace(0, 'Wikipedia', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png', '/wiki')

const mozNs = new Namespace(1, 'Mozilla', 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png', '/mozilla')

const linuxNs = new Namespace(2, 'Linux', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png', '/linux')

wikiNs.addRoom(new Room(0, 'Tycoon', 0))
wikiNs.addRoom(new Room(1, 'Philanthropy', 0))
wikiNs.addRoom(new Room(2, 'Technology', 0))

mozNs.addRoom(new Room(3, 'HackerNews', 1))
mozNs.addRoom(new Room(4, 'TechCrunch', 1))
mozNs.addRoom(new Room(5, 'Netflix', 1))

linuxNs.addRoom(new Room(6, 'Debian', 1))
linuxNs.addRoom(new Room(7, 'Ubuntu', 1))
linuxNs.addRoom(new Room(8, 'Fedora', 1))

const namespaces = [wikiNs, mozNs, linuxNs] // It's now an array of class

module.exports = namespaces