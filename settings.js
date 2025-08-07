//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || ''CYPHER-X:~UEsDBBQAAAgIAC1nB1v6KjJCXAQAAH8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGLmjRnTEclFEsAVRRDfmoYQCS7lZBShO+O8b2N3TsxG7s708FVmVmSfznMwfIC8wRRZqwfgHKAluYIW6Y9WWCIyBWscxIqAPIlhBMAbZ*H7jmSt1anl6KdRGIeeZueHsiXhMpGVI9ea0cWaGpBrXF*Dog7I+pDj8TcCtyOTJ1ES+dJ4kwQI75vC8Kq5eGaQMLafMKZV11p6HJuu+gEcXEWKC82RSHlGGCEwt1DoQk6*BZ6YhpwqFeqEWG1yWB7XpFfvJeX7YEjha7tzLSLB63kjOGPNr8OtNfLvfV40uGzaXcZhvTLYwppm1aabFNL5f2b0gr4Ri4NE3+BQnOYrMCOUVrtov932rqSkPZStaOTdus4yHMSRKcTS4mXEJF37JC2x6L2X2sNl9DXhqi6qqQFebNZl0mu9y+46dptjj4HaLp3caC4FnMKvRKf0bcId8aOX8f*qOJ8SovV3ADPxGqDz3UAnHCZp5plHoyeps6NglE3F2HDyzfQG+qAcSsjjD39mN3hCUn4tKCFYFdpI93mwGXEz2VyithivlEz6savI7lNNzwFimfFlMNP16UQLPFRwmi0a7Y2rJeeLq4fZ1PetBk7ctqTyk9iL2HTwivQEfOAHZc5HLhvs4We2G6bmn17IeQP368qzojFozAmP20QcEJZhWBFa4yDvbiO0DGDUeCgmqnt0FTFjqVMlOByOdN5EhmsdyzwmnKjb1KOAHPt61O5ashyw7fAF9UJIiRJSiaIZpVZB2gSiFCaJg*Of3PsjRrXrjrcvGs30QY0KrTV6XaQGjD1I*LmEYFnVeeW0eat0BETBmPs2oqnCe0K6NdQ5JeMQN0o6womAcw5SinwUigiIwrkiNfg6tVkRd333WUhfO2gZ9kD35wBEYA44XRgwrsPJIEsQxN*qDfrt2cWFZfstRBfogh91zoB1xlrWgD9KnnzSURYGXeV4W2NHTsbM*fiLuEkSogjilnfM88HvVQp1Y+ZShrmEok0TREgV8VvihlDcqSk6lrMJe9iFRpu06tcOenY+24UYsW00rRKfU5vZw+WqfFi**EASMgUyHGtfciLRmvIG8t2Iy0D1XOl6GrGQdDHzH8LJD0cK1zdmab43B5tU39zYZhmkQ1Mjw*Tvj7rTe4lStt*wpsWN7+ZRVH0SowSH6NVmTy9vehCaiuDgrjmQejnDdy9sB9V1LC5bxYXBYtelJVrczZuT6zHZkqU1tSrZfpyY34sLhXQiWi3BVotYws+WrkV11903DzxlK33cXfsqr4677jTF6roJ3iv6byzfkneaYR*+XIO*b5V8mVIVRcnh1X2EWWFc1PIse72Bx4OfTJQyT5LJcSy72BvrJE+7g8fjeB2UKq7ggGRgDmh0g6ANS1J2CzTwufpNJUxJTfa87hbRSPqdijTNEK5iVYMzKoiDKrMDLb68cUpQzSI9gDPjE2czPncRbpSy9ClYfQwaU7nPuBnj8BVBLAQIUAxQAAAgIAC1nB1v6KjJCXAQAAH8HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIQEAAAAAA== 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254732849780' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['254758507505', '254742905148'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Mr.POLITE' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
