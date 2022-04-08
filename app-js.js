var killers = ["TRAPPER", "WRAITH", "HILLBILLY", "NURSE", "MYERS", "HAG", 
"DOCTOR", "HUNTRESS", "LEATHERFACE", "FREDDY", "PIG", "CLOWN", "SPIRIT", 
"LEGION", "PLAGUE", "GHOSTFACE", "DEMOGORGON", "ONI", "DEATHSLINGER", 
"PYRAMID HEAD", "BLIGHT", "TWINS", "TRICKSTER", "NEMESIS", "PINHEAD", 
"ARTIST", "ONRYO"]

function populateKillers() {
  var killer1 = document.getElementById("killer")
  //Fill the Killer Values 
  for (var i = 0; i < killers.length; i++) {
    var opt = killers[i]
    var elem = document.createElement('option')
    elem.textContent = opt
    elem.value = opt
    killer1.appendChild(elem)
  }
}


document.addEventListener('DOMContentLoaded', function () {
  populateKillers()
  var elems = document.querySelectorAll('select')
  var instances = M.FormSelect.init(elems)
});


// Event Listeners for Populating AddonList and Text Boxes
document.getElementById("killer").addEventListener("change", populateAddons)
document.getElementById("killer").addEventListener("change", populateTextboxes)



function populateAddons() {
  var killer1 = document.getElementById("killer").value
  var finalAddons = filteredAddons(killer1)
  addOptions(finalAddons)
}
function filteredAddons(killer) {
  var filteredAddons = addons.filter(function(o) {return o.Killer === killer})
  var finalAddons = filteredAddons.map(function(o) {return o.Addon})
  return finalAddons
}

function addOptions(finalAddons) {

  // Clear Addons before filling options with new values
  var addon1Dropdown = document.getElementById("addon1")
  var addon2Dropdown = document.getElementById("addon2")
  // Use querySelectorAll instead of getElementById so it
  // returns a STATIC NodeList
  var addon1Options = addon1Dropdown.querySelectorAll('option')
  var addon2Options = addon2Dropdown.querySelectorAll('option')

  // numOptions - same for addon1Options and addon2Options
  var numOptions = addon1Options.length
  for (var i = 1; i < numOptions; i++) {
    // Ignoring Option 0 which is 'Select Addon'
    addon1.removeChild(addon1Options[i])
    addon2.removeChild(addon2Options[i])
  }
  // Set option to 'Select Addon'
  addon1.selectedIndex = 0
  addon2.selectedIndex = 0


  //Fill new Addon Values for the selected killer
  for (var i = 0; i < finalAddons.length; i++) {
    var opt = finalAddons[i]
    var elem = document.createElement('option')
    elem.textContent = opt
    elem.value = opt
    addon1.appendChild(elem)
  }

  for (var i = 0; i < finalAddons.length; i++) {
    var opt = finalAddons[i]
    var elem = document.createElement('option')
    elem.textContent = opt
    elem.value = opt
    addon2.appendChild(elem)
  }
  var elems = document.querySelector("#addon1")
  var elems2 = document.querySelector("#addon2")
  M.FormSelect.init(elems)
  M.FormSelect.init(elems2)
}



function populateTextboxes() {
  switch (killer.value) {
    case "TRAPPER":
      document.getElementById("lblpowermod1").innerHTML = "Trap setting time"
      document.getElementById("lblpowermod2").innerHTML = "Trap Disarm Time"
      document.getElementById("lblpowermod3").innerHTML = "Trap Escape Time"
      document.getElementById("lblpowermod4").innerHTML = "Trap Rescue Time"
      document.getElementById("lblpowermod5").innerHTML = ""
      document.getElementById("lblpowermod6").innerHTML = ""
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "2.5"
      document.getElementById("powermod2").value = "3.5"
      document.getElementById("powermod3").value = "1.8"
      document.getElementById("powermod4").value = "1.5"
      document.getElementById("powermod5").value = ""
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      
      break

      case "WRAITH":
      document.getElementById("lblpowermod1").innerHTML = "Cloaked Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Cloaking Time (s)"
      document.getElementById("lblpowermod3").innerHTML = "Uncloaking Time (s)"
      document.getElementById("lblpowermod4").innerHTML = "Pallet Break Time (s)"
      document.getElementById("lblpowermod5").innerHTML = "Generator Damage Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "Window Vault Time (s)"
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "6.0"
      document.getElementById("powermod2").value = "1.5"
      document.getElementById("powermod3").value = "3.0"
      document.getElementById("powermod4").value = "2.6"
      document.getElementById("powermod5").value = "2.0"
      document.getElementById("powermod6").value = "1.7"
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "HILLBILLY":
      document.getElementById("lblpowermod1").innerHTML = "Power Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Overheat Limit (charges)"
      document.getElementById("lblpowermod3").innerHTML = "Charge Time (s)"
      document.getElementById("lblpowermod4").innerHTML = "Cooling Rate (charges/s)"
      document.getElementById("lblpowermod5").innerHTML = "Turn Rate"
      document.getElementById("lblpowermod6").innerHTML = "Bump Penalty (s)"
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "9.2"
      document.getElementById("powermod2").value = "100"
      document.getElementById("powermod3").value = "2.5"
      document.getElementById("powermod4").value = "3.5"
      document.getElementById("powermod5").value = "32"
      document.getElementById("powermod6").value = "3.0"
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "NURSE":
      document.getElementById("lblpowermod1").innerHTML = "Power Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Blink Charge Time (s)"
      document.getElementById("lblpowermod3").innerHTML = "Initial Blink Range (M)"
      document.getElementById("lblpowermod4").innerHTML = "Blink Recharge Time (s)"
      document.getElementById("lblpowermod5").innerHTML = "Base Blink Fatigue (s)"
      document.getElementById("lblpowermod6").innerHTML = "Chain Blink Fatigue (s)"
      document.getElementById("lblpowermod7").innerHTML = "Chain Blink Window (s)"
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "3.85"
      document.getElementById("powermod1").value = "13.33"
      document.getElementById("powermod2").value = "2.0"
      document.getElementById("powermod3").value = "20"
      document.getElementById("powermod4").value = "3.0"
      document.getElementById("powermod5").value = "2.0"
      document.getElementById("powermod6").value = "0.5"
      document.getElementById("powermod7").value = "1.5"
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break
      
      case "MYERS":
      document.getElementById("lblpowermod1").innerHTML = "Stalking Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Evil Within 3 Duration (s)"
      document.getElementById("lblpowermod3").innerHTML = "Evil Within 3 Evil Required"
      document.getElementById("lblpowermod4").innerHTML = "Stalking Rate (point blank)"
      document.getElementById("lblpowermod5").innerHTML = ""
      document.getElementById("lblpowermod6").innerHTML = ""
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "0.92"
      document.getElementById("powermod2").value = "60"
      document.getElementById("powermod3").value = "5.0"
      document.getElementById("powermod4").value = "0.8333"
      document.getElementById("powermod5").value = ""
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "HAG":
      document.getElementById("lblpowermod1").innerHTML = "Trap Setting Time (s)"
      document.getElementById("lblpowermod2").innerHTML = "Trap Tripped Duration (s)"
      document.getElementById("lblpowermod3").innerHTML = "Teleport Range (M)"
      document.getElementById("lblpowermod4").innerHTML = "Trap Trigger Range (M)"
      document.getElementById("lblpowermod5").innerHTML = ""
      document.getElementById("lblpowermod6").innerHTML = ""
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.4"
      document.getElementById("powermod1").value = "2.2"
      document.getElementById("powermod2").value = "5.0"
      document.getElementById("powermod3").value = "40"
      document.getElementById("powermod4").value = "3.0"
      document.getElementById("powermod5").value = ""
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "DOCTOR":
      document.getElementById("lblpowermod1").innerHTML = "Shock Therapy Detonation Delay (s)"
      document.getElementById("lblpowermod2").innerHTML = "Shock Therapy Range (M)"
      document.getElementById("lblpowermod3").innerHTML = "Static Blast Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = ""
      document.getElementById("lblpowermod5").innerHTML = ""
      document.getElementById("lblpowermod6").innerHTML = ""
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "1.0"
      document.getElementById("powermod2").value = "10"
      document.getElementById("powermod3").value = "60"
      document.getElementById("powermod4").value = ""
      document.getElementById("powermod5").value = ""
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "HUNTRESS":
      document.getElementById("lblpowermod1").innerHTML = "Windup Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Hatchet Cooldown (s)"
      document.getElementById("lblpowermod3").innerHTML = "Hatchet Windup Time Minimum (s)"
      document.getElementById("lblpowermod4").innerHTML = "Hatchet Windup Time Maximum (s)"
      document.getElementById("lblpowermod5").innerHTML = "Hatchet Reload Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "Hatchet Flight Speed Minimum (M/s)"
      document.getElementById("lblpowermod7").innerHTML = "Hatchet Flight Speed Maximum (M/s)"
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.4"
      document.getElementById("powermod1").value = "3.08"
      document.getElementById("powermod2").value = "2.0"
      document.getElementById("powermod3").value = "1.0"
      document.getElementById("powermod4").value = "3.0"
      document.getElementById("powermod5").value = "4.0"
      document.getElementById("powermod6").value = "25.0"
      document.getElementById("powermod7").value = "40.0"
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "LEATHERFACE":
      document.getElementById("lblpowermod1").innerHTML = "Chainsaw Charging Move Speed (after 1s) (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Chainsaw Dash Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Chainsaw Hit Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = "Chainsaw Miss Cooldown (s)"
      document.getElementById("lblpowermod5").innerHTML = "Chainsaw Token Recharge Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "Tantrum Duration (+1s for each token used) (s)"
      document.getElementById("lblpowermod7").innerHTML = "Revving time before Tantrum (+1s for each token used) (s)"
      document.getElementById("lblpowermod8").innerHTML = "Chainsaw Dash Duration (s)"
      document.getElementById("lblpowermod9").innerHTML = "Chainsaw Charge Time (s)"
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.45"
      document.getElementById("powermod2").value = "5.29"
      document.getElementById("powermod3").value = "2.0"
      document.getElementById("powermod4").value = "1.5"
      document.getElementById("powermod5").value = "4.0"
      document.getElementById("powermod6").value = "5.0"
      document.getElementById("powermod7").value = "5.0"
      document.getElementById("powermod8").value = "2.0"
      document.getElementById("powermod9").value = "2.0"
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "FREDDY":
      document.getElementById("lblpowermod1").innerHTML = "Dream Snare Placement Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Skill Check Regression Penalty (generator %)"
      document.getElementById("lblpowermod3").innerHTML = "Dream Projection Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = "Dream Projection Cooldown Reduction per asleep survivor (s)"
      document.getElementById("lblpowermod5").innerHTML = ""
      document.getElementById("lblpowermod6").innerHTML = ""
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "4.0"
      document.getElementById("powermod2").value = "10"
      document.getElementById("powermod3").value = "45"
      document.getElementById("powermod4").value = "6.75"
      document.getElementById("powermod5").value = ""
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "PIG":
      document.getElementById("lblpowermod1").innerHTML = "Crouch Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Ambush Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Ambush Miss Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = "Ambush Charge Time (s)"
      document.getElementById("lblpowermod5").innerHTML = "Crouch Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "RBT Death Timer (s)"
      document.getElementById("lblpowermod7").innerHTML = "Jigsaw Box Search Time (s)"
      document.getElementById("lblpowermod8").innerHTML = "RBT Setting Time (s) "
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.6"
      document.getElementById("powermod2").value = "6.9"
      document.getElementById("powermod3").value = "2.0"
      document.getElementById("powermod4").value = "0.75"
      document.getElementById("powermod5").value = "1.3"
      document.getElementById("powermod6").value = "150"
      document.getElementById("powermod7").value = "12.0"
      document.getElementById("powermod8").value = "3.3"
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "CLOWN":
      document.getElementById("lblpowermod1").innerHTML = "Bottle Reloading Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Invigorated Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Survivor Hindered Penalty (M/s)"
      document.getElementById("lblpowermod4").innerHTML = "Bottle Velocity Min (M/s)"
      document.getElementById("lblpowermod5").innerHTML = "Bottle Velocity Max (M/s)"
      document.getElementById("lblpowermod6").innerHTML = "Bottle Reloading Time (s)"
      document.getElementById("lblpowermod7").innerHTML = "Bottle Throw Cooldown (s)"
      document.getElementById("lblpowermod8").innerHTML = "Bottle Intoxicated Duration (s)"
      document.getElementById("lblpowermod9").innerHTML = "Bottle Invigorated Duration (s)"
      document.getElementById("lblpowermod10").innerHTML = "Tonic Bottle AOE Radius (M)"
      document.getElementById("lblpowermod11").innerHTML = "Antidote Bottle AOE Radius (M)"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "1.61"
      document.getElementById("powermod2").value = "5.06"
      document.getElementById("powermod3").value = "-0.6"
      document.getElementById("powermod4").value = "8.5"
      document.getElementById("powermod5").value = "14"
      document.getElementById("powermod6").value = "3"
      document.getElementById("powermod7").value = "1"
      document.getElementById("powermod8").value = "2"
      document.getElementById("powermod9").value = "5"
      document.getElementById("powermod10").value = "7.6"
      document.getElementById("powermod11").value = "6.35"
      M.updateTextFields()
      break

      case "SPIRIT":
      document.getElementById("lblpowermod1").innerHTML = "Haunting Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Haunting Duration (s)"
      document.getElementById("lblpowermod3").innerHTML = "Haunting Recharge Rate"
      document.getElementById("lblpowermod4").innerHTML = "Haunting Recharge Time (s)"
      document.getElementById("lblpowermod5").innerHTML = "Haunting Activation Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "Reappearance Speed Burst Duration (s)"
      document.getElementById("lblpowermod7").innerHTML = "Additional Reappearance Move Speed (M/s)"
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.4"
      document.getElementById("powermod1").value = "7.04"
      document.getElementById("powermod2").value = "5"
      document.getElementById("powermod3").value = "0.333"
      document.getElementById("powermod4").value = "15"
      document.getElementById("powermod5").value = "1.5"
      document.getElementById("powermod6").value = "0.5"
      document.getElementById("powermod7").value = "0"
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""

      M.updateTextFields()
      break

      case "LEGION":
      document.getElementById("lblpowermod1").innerHTML = "Feral Frenzy Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Feral Frenzy Duration (s)"
      document.getElementById("lblpowermod3").innerHTML = "Feral Frenzy Recharge Time (s)"
      document.getElementById("lblpowermod4").innerHTML = "Feral Frenzy Recharge Rate"
      document.getElementById("lblpowermod5").innerHTML = "Feral Frenzy Killer Instinct Detection Radius (M)"
      document.getElementById("lblpowermod6").innerHTML = "Feral Frenzy Hit Mending Time (s)"
      document.getElementById("lblpowermod7").innerHTML = "Additional Feral Frenzy Move Speed Per Hit (M/s)"
      document.getElementById("lblpowermod8").innerHTML = "Feral Frenzy Hit 1 Move Speed (M/s)"
      document.getElementById("lblpowermod9").innerHTML = "Feral Frenzy Hit 2 Move Speed (M/s)"
      document.getElementById("lblpowermod10").innerHTML = "Feral Frenzy Hit 3 Move Speed (M/s)"
      document.getElementById("lblpowermod11").innerHTML = "Feral Frenzy Hit 4 Move Speed (M/s)"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "5.2"
      document.getElementById("powermod2").value = "10"
      document.getElementById("powermod3").value = "20"
      document.getElementById("powermod4").value = "0.5"
      document.getElementById("powermod5").value = "40"
      document.getElementById("powermod6").value = "12"
      document.getElementById("powermod7").value = "0.2"
      document.getElementById("powermod8").value = "5.4"
      document.getElementById("powermod9").value = "5.6"
      document.getElementById("powermod10").value = "5.8"
      document.getElementById("powermod11").value = "6.0"
      M.updateTextFields()
      break

      case "PLAGUE":
      document.getElementById("lblpowermod1").innerHTML = "Vile Purge Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Corrupt Purge Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Vile (& Corrupt) Purge Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = "Vile (& Corrupt) Purge Charge Time (s)"
      document.getElementById("lblpowermod5").innerHTML = "Vile (& Corrupt) Purge Projectile Speed (M/s)"
      document.getElementById("lblpowermod6").innerHTML = "Sickness Required for Infection"
      document.getElementById("lblpowermod7").innerHTML = "Sickness gained per Vile Purge Projectile"
      document.getElementById("lblpowermod8").innerHTML = "Vile Purge Object Infection Duration (s)"
      document.getElementById("lblpowermod9").innerHTML = "Vile Purge Sickness gained from infected Objects (per s)"
      document.getElementById("lblpowermod10").innerHTML = "Corrupted Pools of Devotion"
      document.getElementById("lblpowermod11").innerHTML = "Corrupt Purge Duration"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "4.4"
      document.getElementById("powermod2").value = "4.4"
      document.getElementById("powermod3").value = "1.5"
      document.getElementById("powermod4").value = "1.5"
      document.getElementById("powermod5").value = "10.55"
      document.getElementById("powermod6").value = "100"
      document.getElementById("powermod7").value = "1.25"
      document.getElementById("powermod8").value = "40"
      document.getElementById("powermod9").value = "2.0"
      document.getElementById("powermod10").value = "1"
      document.getElementById("powermod11").value = "60"
      M.updateTextFields()
      break

      case "GHOSTFACE":
      document.getElementById("lblpowermod1").innerHTML = "Crouched Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Active Stalking (Standing) Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Time to Mark Survivors (Not Leaning) (s)"
      document.getElementById("lblpowermod4").innerHTML = "Time to Get Revealed (s)"
      document.getElementById("lblpowermod5").innerHTML = "Night Shroud Recovery Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "Marked Duration (s)"
      document.getElementById("lblpowermod7").innerHTML = "Killer Instinct Duration (s)"
      document.getElementById("lblpowermod8").innerHTML = "Maximum Reveal Distance (M)"
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.6"
      document.getElementById("powermod2").value = "0.92"
      document.getElementById("powermod3").value = "5"
      document.getElementById("powermod4").value = "1.5"
      document.getElementById("powermod5").value = "24"
      document.getElementById("powermod6").value = "60"
      document.getElementById("powermod7").value = "2"
      document.getElementById("powermod8").value = "32"
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break
      
      case "DEMOGORGON":
      document.getElementById("lblpowermod1").innerHTML = "Shred Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Shred Charging Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Shred Successful Hit Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = "Shred Miss Cooldown (s)"
      document.getElementById("lblpowermod5").innerHTML = "Shred Pallet Break Cooldown (s)"
      document.getElementById("lblpowermod6").innerHTML = "Portal Traversal Speed (M/s)"
      document.getElementById("lblpowermod7").innerHTML = "Portal Opening Time (s)"
      document.getElementById("lblpowermod8").innerHTML = "Portal Killer Instinct Range Radius (M)"
      document.getElementById("lblpowermod9").innerHTML = "Portal Sealing Time (1 survivor) (s)"
      document.getElementById("lblpowermod10").innerHTML = "Portal Undetectable Effect Duration (s)"
      document.getElementById("lblpowermod11").innerHTML = "Portal Traversal Power Recovery Time (s)"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "18.4"
      document.getElementById("powermod2").value = "3.86"
      document.getElementById("powermod3").value = "3"
      document.getElementById("powermod4").value = "2.25"
      document.getElementById("powermod5").value = "2"
      document.getElementById("powermod6").value = "20"
      document.getElementById("powermod7").value = "1"
      document.getElementById("powermod8").value = "4"
      document.getElementById("powermod9").value = "12"
      document.getElementById("powermod10").value = "3"
      document.getElementById("powermod11").value = "10"
      M.updateTextFields()
      break

      case "ONI":
      document.getElementById("lblpowermod1").innerHTML = "Blood Orb Absorption Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Blood Orb Attraction Distance (M)"
      document.getElementById("lblpowermod3").innerHTML = "Demon Dash Move Speed (M/s)"
      document.getElementById("lblpowermod4").innerHTML = "Demon Dash Charge Time (s)"
      document.getElementById("lblpowermod5").innerHTML = "Demon Strike Charge Time (s)"
      document.getElementById("lblpowermod6").innerHTML = "Demon Strike Charge Threshold (s)"
      document.getElementById("lblpowermod7").innerHTML = "Blood Fury Activation Time (s)"
      document.getElementById("lblpowermod8").innerHTML = "Blood Fury Deactivation Time (s)"
      document.getElementById("lblpowermod9").innerHTML = "Blood Fury Duration (s)"
      document.getElementById("lblpowermod10").innerHTML = "Blood Fury Passive Recharge Rate (charges/s) "
      document.getElementById("lblpowermod11").innerHTML = "Blood Fury Down Penalty (s)"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.45"
      document.getElementById("powermod2").value = "6"
      document.getElementById("powermod3").value = "7.82"
      document.getElementById("powermod4").value = "2"
      document.getElementById("powermod5").value = "2"
      document.getElementById("powermod6").value = "0.35"
      document.getElementById("powermod7").value = "3"
      document.getElementById("powermod8").value = "3"
      document.getElementById("powermod9").value = "45.45"
      document.getElementById("powermod10").value = "0.2"
      document.getElementById("powermod11").value = "-7"
      M.updateTextFields()
      break

      case "DEATHSLINGER":
      document.getElementById("lblpowermod1").innerHTML = "ADS Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Harpoon Reloading Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Harpoon Projectile Speed (M/s)"
      document.getElementById("lblpowermod4").innerHTML = "Harpoon Firing Delay (s)"
      document.getElementById("lblpowermod5").innerHTML = "Harpoon Max Range (M)"
      document.getElementById("lblpowermod6").innerHTML = "Harpoon Missed Shot Cooldown (s)"
      document.getElementById("lblpowermod7").innerHTML = "Harpoon Reloading Time (s)"
      document.getElementById("lblpowermod8").innerHTML = "Harpoon Reeling Speed (M/s)"
      document.getElementById("lblpowermod9").innerHTML = "Mending Time (Self) (s)"
      document.getElementById("lblpowermod10").innerHTML = "Stun Duration (s)"
      document.getElementById("lblpowermod11").innerHTML = "ADS Terror Radius (M)"

      document.getElementById("basemovespeed").value = "4.4"
      document.getElementById("powermod1").value = "3.74"
      document.getElementById("powermod2").value = "2.06"
      document.getElementById("powermod3").value = "40"
      document.getElementById("powermod4").value = "0.5"
      document.getElementById("powermod5").value = "18"
      document.getElementById("powermod6").value = "1.5"
      document.getElementById("powermod7").value = "2.75"
      document.getElementById("powermod8").value = "2.6"
      document.getElementById("powermod9").value = "12"
      document.getElementById("powermod10").value = "4"
      document.getElementById("powermod11").value = "24"
      M.updateTextFields()
      break

      case "PYRAMID HEAD":
      document.getElementById("lblpowermod1").innerHTML = "Rites of Judgement Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Rites of Judgement Activation/Cancellation Time (s)"
      document.getElementById("lblpowermod3").innerHTML = "Punishment of the Damned Attack Cooldown (s)"
      document.getElementById("lblpowermod4").innerHTML = "Punishment of the Damned Attack Range (M)"
      document.getElementById("lblpowermod5").innerHTML = "Rites of Judgement Power Duration (s)"
      document.getElementById("lblpowermod6").innerHTML = "Rites of Judgement Power Recharge Time (s)"
      document.getElementById("lblpowermod7").innerHTML = "Rites of Judgement Power Recharge Rate"
      document.getElementById("lblpowermod8").innerHTML = "Torment Killer Instinct Duration (s)"
      document.getElementById("lblpowermod9").innerHTML = "Torment Trails Despawn Time(s)"
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "4.4"
      document.getElementById("powermod2").value = "1"
      document.getElementById("powermod3").value = "2.25"
      document.getElementById("powermod4").value = "8"
      document.getElementById("powermod5").value = "5"
      document.getElementById("powermod6").value = "20"
      document.getElementById("powermod7").value = "0.25"
      document.getElementById("powermod8").value = "3"
      document.getElementById("powermod9").value = "75"
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""

      M.updateTextFields()
      break

      case "BLIGHT":
      document.getElementById("lblpowermod1").innerHTML = "Rush Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Rush Token Recharge Time (s)"
      document.getElementById("lblpowermod3").innerHTML = "Rush Tokens"
      document.getElementById("lblpowermod4").innerHTML = "Rush Fatigue (s)"
      document.getElementById("lblpowermod5").innerHTML = "Speed Multiplier per Rush"
      document.getElementById("lblpowermod6").innerHTML = "Lethal Rush 1 Speed"
      document.getElementById("lblpowermod7").innerHTML = "Lethal Rush 2 Speed"
      document.getElementById("lblpowermod8").innerHTML = "Lethal Rush 3 Speed"
      document.getElementById("lblpowermod9").innerHTML = "Lethal Rush 4 Speed"
      document.getElementById("lblpowermod10").innerHTML = "Lethal Rush 5 Speed"
      document.getElementById("lblpowermod11").innerHTML = "Lethal Rush 6 Speed"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "9.2"
      document.getElementById("powermod2").value = "2"
      document.getElementById("powermod3").value = "5"
      document.getElementById("powermod4").value = "2.5"
      document.getElementById("powermod5").value = "0.0"
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "TWINS":
      document.getElementById("lblpowermod1").innerHTML = "Victor Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Victor Charged Pounce Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Victor Pounce Charge Time (s)"
      document.getElementById("lblpowermod4").innerHTML = "Victor Pounce Hit(and down) Cooldown (s)"
      document.getElementById("lblpowermod5").innerHTML = "Victor Pounce Miss Cooldown (s)"
      document.getElementById("lblpowermod6").innerHTML = "Victor Unbinding Time (s)"
      document.getElementById("lblpowermod7").innerHTML = "Time for survivor to crush Victor (s)"
      document.getElementById("lblpowermod8").innerHTML = "Victor to Charlotte Switch Cooldown (s)"
      document.getElementById("lblpowermod9").innerHTML = "Time for survivor to remove Victor (s)"
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "6"
      document.getElementById("powermod2").value = "2.4"
      document.getElementById("powermod3").value = "1"
      document.getElementById("powermod4").value = "5"
      document.getElementById("powermod5").value = "3"
      document.getElementById("powermod6").value = "1"
      document.getElementById("powermod7").value = "0.25"
      document.getElementById("powermod8").value = "3"
      document.getElementById("powermod9").value = "8"
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "TRICKSTER":
      document.getElementById("lblpowermod1").innerHTML = "Main Event Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Initial Throw State Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Eventual Throw State Move Speed (M/s)"
      document.getElementById("lblpowermod4").innerHTML = "Starting Blades"
      document.getElementById("lblpowermod5").innerHTML = "Blade Capactity"
      document.getElementById("lblpowermod6").innerHTML = "Blade Projectile Speed (M/s)"
      document.getElementById("lblpowermod7").innerHTML = "Main Event Duration (s)"
      document.getElementById("lblpowermod8").innerHTML = "Main Event Cooldown (s)"
      document.getElementById("lblpowermod9").innerHTML = "Laceration Meter Decay Delay (s)"
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.4"
      document.getElementById("powermod1").value = "3.86"
      document.getElementById("powermod2").value = "3.86"
      document.getElementById("powermod3").value = "3.68"
      document.getElementById("powermod4").value = "44"
      document.getElementById("powermod5").value = "44"
      document.getElementById("powermod6").value = "55"
      document.getElementById("powermod7").value = "10"
      document.getElementById("powermod8").value = "5"
      document.getElementById("powermod9").value = "15"
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "NEMESIS":
      document.getElementById("lblpowermod1").innerHTML = "Tentacle Strike Charging Move Speed (Mutation 2) (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Tentacle Strike Charging Move Speed (Mutation 3) (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Mutation Gained from Uncontaminated Survivor"
      document.getElementById("lblpowermod4").innerHTML = "Mutation Gained from Contaminated Survivor"
      document.getElementById("lblpowermod5").innerHTML = "Mutation Gained from Zombie"
      document.getElementById("lblpowermod6").innerHTML = "Zombie Move Speed (M/s)"
      document.getElementById("lblpowermod7").innerHTML = "Zombie Detection Range (M)"
      document.getElementById("lblpowermod8").innerHTML = "Zombie Detection FOV (degrees)"
      document.getElementById("lblpowermod9").innerHTML = "Vaccine Injection Time (s)"
      document.getElementById("lblpowermod10").innerHTML = "Post-Vaccination Killer Instinct Duration (s)"
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.8"
      document.getElementById("powermod2").value = "4.0"
      document.getElementById("powermod3").value = "3"
      document.getElementById("powermod4").value = "1"
      document.getElementById("powermod5").value = "1"
      document.getElementById("powermod6").value = "1.0"
      document.getElementById("powermod7").value = "14"
      document.getElementById("powermod8").value = "190"
      document.getElementById("powermod9").value = "3"
      document.getElementById("powermod10").value = "3"
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

      case "PINHEAD":
      document.getElementById("lblpowermod1").innerHTML = "Move Speed when holding Gateway (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Initial Possessed Chain Move Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Possessed Chain Move Speed after 0.7s (M/s)"
      document.getElementById("lblpowermod4").innerHTML = "Additional Chains Spawned on Possessed Chain Hit"
      document.getElementById("lblpowermod5").innerHTML = "Possessed Chain Hit Cool Down (s)"
      document.getElementById("lblpowermod6").innerHTML = "Possessed Chain Horizontal Turn Rate (degrees/ server tick)"
      document.getElementById("lblpowermod7").innerHTML = "Possessed Chain Vertical Turn Rate (degrees/ server tick)"
      document.getElementById("lblpowermod8").innerHTML = "Chain Hunt Activation Time (s)"
      document.getElementById("lblpowermod9").innerHTML = "Gateway Casting Distance (M)"
      document.getElementById("lblpowermod10").innerHTML = "Possessed Chains Travel Distance (M)"
      document.getElementById("lblpowermod11").innerHTML = "Lament Configuration Solving Time (s)"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.68"
      document.getElementById("powermod2").value = "10"
      document.getElementById("powermod3").value = "37.5"
      document.getElementById("powermod4").value = "3"
      document.getElementById("powermod5").value = "5"
      document.getElementById("powermod6").value = "125"
      document.getElementById("powermod7").value = "100"
      document.getElementById("powermod8").value = "90"
      document.getElementById("powermod9").value = "16"
      document.getElementById("powermod10").value = "24"
      document.getElementById("powermod11").value = "6"
      M.updateTextFields()
      break

      case "ARTIST":
      document.getElementById("lblpowermod1").innerHTML = "Summoning Birds, Firing Move Speed (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Dire Crows Intial Projectile Speed (M/s)"
      document.getElementById("lblpowermod3").innerHTML = "Dire Crows Eventual Projectile Speed (after 0.3s) (M/s)"
      document.getElementById("lblpowermod4").innerHTML = "Dire Crows Available"
      document.getElementById("lblpowermod5").innerHTML = "Dire Crows Damaging Path Length (M)"
      document.getElementById("lblpowermod6").innerHTML = "Dire Crows Idle Time Before Disintegrating (s)"
      document.getElementById("lblpowermod7").innerHTML = "Birds of Torment CD After Disintegrating (s)"
      document.getElementById("lblpowermod8").innerHTML = "Swarm Repel Action Duration (s)"
      document.getElementById("lblpowermod9").innerHTML = "Dire Crows Flashlight Burn Time (s)"
      document.getElementById("lblpowermod10").innerHTML = "Dire Crows Killer Instinct Duration (s)"
      document.getElementById("lblpowermod11").innerHTML = "Dire Crows Killer Instinct Radius (M)"

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "3.68"
      document.getElementById("powermod2").value = "20"
      document.getElementById("powermod3").value = "35"
      document.getElementById("powermod4").value = "3"
      document.getElementById("powermod5").value = "7.5"   //TODO
      document.getElementById("powermod6").value = "10"
      document.getElementById("powermod7").value = "2"
      document.getElementById("powermod8").value = "8"
      document.getElementById("powermod9").value = "1"
      document.getElementById("powermod10").value = "3"
      document.getElementById("powermod11").value = "4"
      M.updateTextFields()
      break

      case "ONRYO":
      document.getElementById("lblpowermod1").innerHTML = "Post Projection Move Speed Burst (M/s)"
      document.getElementById("lblpowermod2").innerHTML = "Post Manifest Invisibility Duration (s)"
      document.getElementById("lblpowermod3").innerHTML = "Post Manifest Flickering Duration (s)"
      document.getElementById("lblpowermod4").innerHTML = "TV Cooldown (Post-Projection) (s)"
      document.getElementById("lblpowermod5").innerHTML = "TV Cooldown (Turn-off) (s)"
      document.getElementById("lblpowermod6").innerHTML = "Tape Condemned Progress Time (s)"
      document.getElementById("lblpowermod7").innerHTML = "Demanifest Invisibility Duration (s)"
      document.getElementById("lblpowermod8").innerHTML = "Demanifest Visibility Radius (M)"
      document.getElementById("lblpowermod9").innerHTML = "Post-Manifest Undetectable Duration (s)"
      document.getElementById("lblpowermod10").innerHTML = "Post-Projection Undetectable Duration (s)"
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = "4.6"
      document.getElementById("powermod1").value = "6.9"
      document.getElementById("powermod2").value = "0.75"
      document.getElementById("powermod3").value = "4"
      document.getElementById("powermod4").value = "100"
      document.getElementById("powermod5").value = "60"
      document.getElementById("powermod6").value = "25"
      document.getElementById("powermod7").value = "1"
      document.getElementById("powermod8").value = "32"
      document.getElementById("powermod9").value = "0"
      document.getElementById("powermod10").value = "1"
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

    case "general":
      document.getElementById("lblpowermod1").innerHTML = ""
      document.getElementById("lblpowermod2").innerHTML = ""
      document.getElementById("lblpowermod3").innerHTML = ""
      document.getElementById("lblpowermod4").innerHTML = ""
      document.getElementById("lblpowermod5").innerHTML = ""
      document.getElementById("lblpowermod6").innerHTML = ""
      document.getElementById("lblpowermod7").innerHTML = ""
      document.getElementById("lblpowermod8").innerHTML = ""
      document.getElementById("lblpowermod9").innerHTML = ""
      document.getElementById("lblpowermod10").innerHTML = ""
      document.getElementById("lblpowermod11").innerHTML = ""

      document.getElementById("basemovespeed").value = ""
      document.getElementById("powermod1").value = ""
      document.getElementById("powermod2").value = ""
      document.getElementById("powermod3").value = ""
      document.getElementById("powermod4").value = ""
      document.getElementById("powermod5").value = ""
      document.getElementById("powermod6").value = ""
      document.getElementById("powermod7").value = ""
      document.getElementById("powermod8").value = ""
      document.getElementById("powermod9").value = ""
      document.getElementById("powermod10").value = ""
      document.getElementById("powermod11").value = ""
      M.updateTextFields()
      break

  }
}

// Event Listeners for calculating and displaying Addon Modifiers
document.getElementById("addon1").addEventListener("change", calcAndShowAddonData)
document.getElementById("addon2").addEventListener("change", calcAndShowAddonData)

function calcAndShowAddonData() {
  var killer = document.getElementById("killer").value
  var addon1 = document.getElementById("addon1").value
  var addon2 = document.getElementById("addon2").value
  var addon1Arr = Array(12).fill(0)
  var addon2Arr = Array(12).fill(0)
  var totalArr = Array(12).fill(0)

  // Get Addon Modifiers and pass them to 
  // addonDataRetrieval function to save as array and use 
  
  if(addon1 !== "") {
    var addon1List = getAddonModifiers(addon1)
    if(addon2 !== "") {
      var addon2List = getAddonModifiers(addon2)
      addonDataRetrieval(addon1List, addon2List)
    }
    else if (addon2 === "") {
      addonDataRetrieval(addon1List, addon2Arr)
    }
  }
  else if(addon1 === "") {
    if(addon2 !== "") {
      var addon2List = getAddonModifiers(addon2)
      addonDataRetrieval(addon1Arr, addon2List)
    }
    
  }
  
  
  

  function getAddonModifiers(addon) {
        
    // Get values of Addon modifiers
    var filteredAddonList = addons.filter(function(o) {return o.Addon === addon})


    var finalAddonModifierList = [
      parseFloat(filteredAddonList[0].MoveSpeedMod),
      parseFloat(filteredAddonList[0].AddonMod1), 
      parseFloat(filteredAddonList[0].AddonMod2),
      parseFloat(filteredAddonList[0].AddonMod3),
      parseFloat(filteredAddonList[0].AddonMod4),
      parseFloat(filteredAddonList[0].AddonMod5),
      parseFloat(filteredAddonList[0].AddonMod6),
      parseFloat(filteredAddonList[0].AddonMod7),
      parseFloat(filteredAddonList[0].AddonMod8),
      parseFloat(filteredAddonList[0].AddonMod9),
      parseFloat(filteredAddonList[0].AddonMod10),
      parseFloat(filteredAddonList[0].AddonMod11)
    ]
    console.log(finalAddonModifierList)
    return finalAddonModifierList
  }


  function addonDataRetrieval(addonMod1, addonMod2) {
    addon1Arr = addonMod1
    addon2Arr = addonMod2
    

    switch(killer) {
      case "TRAPPER":
      var baseMoveSpeed = 4.6
      var baseSettingTime = 1.5
      var addSettingTime = 1.0
      var baseDisarmTime = 3.5
      var baseEscapeTime = 1.8
      var baseRescueTime = 1.5
      console.log(addon1 === "")
      console.log(addon2)
      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Setting Speed
        totalArr[2] = (1 + addon1Arr[2]) * (1 + addon2Arr[2]) // Disarm Speed
        totalArr[3] = (1 - addon1Arr[3]) * (1 - addon2Arr[3]) // Escape Time
        totalArr[4] = (1 - addon1Arr[4]) * (1 - addon2Arr[4]) // Rescue Time
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalSettingTime = ((baseSettingTime/(1 + totalArr[1])) + addSettingTime).toFixed(2)
        var totalDisarmTime = (baseDisarmTime / totalArr[2]).toFixed(2)
        var totalEscapeTime = (baseEscapeTime / totalArr[3]).toFixed(2)
        var totalRescueTime = (baseRescueTime / totalArr[4]).toFixed(2)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalSettingTime = ((baseSettingTime/(1 + addon1Arr[1])) + addSettingTime).toFixed(2)
        var totalDisarmTime = (baseDisarmTime / (1 + addon1Arr[2])).toFixed(2)
        var totalEscapeTime = (baseEscapeTime / (1 - addon1Arr[3])).toFixed(2)
        var totalRescueTime = (baseRescueTime / (1 - addon1Arr[4]) ).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalSettingTime = ((baseSettingTime/(1 + addon2Arr[1])) + addSettingTime).toFixed(2)
        var totalDisarmTime = (baseDisarmTime / (1 + addon2Arr[2])).toFixed(2)
        var totalEscapeTime = (baseEscapeTime / (1 - addon2Arr[3])).toFixed(2)
        var totalRescueTime = (baseRescueTime / (1 - addon2Arr[4]) ).toFixed(2)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalSettingTime
      document.getElementById("powermod2").value = totalDisarmTime
      document.getElementById("powermod3").value = totalEscapeTime
      document.getElementById("powermod4").value = totalRescueTime
      
      M.updateTextFields()
      break

      case "WRAITH":
      var baseMoveSpeed = 4.6
      var powerMoveSpeed = 6.0
      var baseCloakTime = 1.5
      var baseUncloakTime = 3.0
      var basePalletBreakTime = 2.6
      var baseGenDamageTime = 2.0
      var baseWindowVaultTime = 1.7

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Power Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Cloak Time
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Uncloak Time
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Pallet Break Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Generator Damage
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Window Vault Time
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalPowerMoveSpeed = powerMoveSpeed + totalArr[1]
        var totalCloakTime = (baseCloakTime / (1 + totalArr[2])).toFixed(2)
        var totalUncloakTime = (baseUncloakTime / (1 + totalArr[3])).toFixed(2)
        var totalPalletBreakTime = (basePalletBreakTime / (1 + totalArr[4])).toFixed(2)
        var totalGenDamageTime = (baseGenDamageTime / (1 + totalArr[5])).toFixed(2)
        var totalWindowVaultTime = (baseWindowVaultTime / (1 + totalArr[6])).toFixed(2)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalPowerMoveSpeed = powerMoveSpeed + addon1Arr[1]
        var totalCloakTime = (baseCloakTime / (1 + addon1Arr[2])).toFixed(2)
        var totalUncloakTime = (baseUncloakTime / (1 + addon1Arr[3])).toFixed(2)
        var totalPalletBreakTime = (basePalletBreakTime / (1 + addon1Arr[4])).toFixed(2)
        var totalGenDamageTime = (baseGenDamageTime / (1 + addon1Arr[5])).toFixed(2)
        var totalWindowVaultTime = (baseWindowVaultTime / (1 + addon1Arr[6])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalPowerMoveSpeed = powerMoveSpeed + addon2Arr[1]
        var totalCloakTime = (baseCloakTime / (1 + addon2Arr[2])).toFixed(2)
        var totalUncloakTime = (baseUncloakTime / (1 + addon2Arr[3])).toFixed(2)
        var totalPalletBreakTime = (basePalletBreakTime / (1 + addon2Arr[4])).toFixed(2)
        var totalGenDamageTime = (baseGenDamageTime / (1 + addon2Arr[5])).toFixed(2)
        var totalWindowVaultTime = (baseWindowVaultTime / (1 + addon2Arr[6])).toFixed(2)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalPowerMoveSpeed
      document.getElementById("powermod2").value = totalCloakTime
      document.getElementById("powermod3").value = totalUncloakTime
      document.getElementById("powermod4").value = totalPalletBreakTime
      document.getElementById("powermod5").value = totalGenDamageTime
      document.getElementById("powermod6").value = totalWindowVaultTime
      M.updateTextFields()
      break

      case "HILLBILLY":
      var baseMoveSpeed = 4.6
      var powerMoveSpeed = 9.2
      var baseOverheatLimit = 100
      var baseChargeTime = 2.5
      var baseCoolingRate = 3.5
      var baseTurnRate = 32
      var baseBumpPenalty = 3

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Power Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Overheat Limit
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Charge Time
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Cooling Rate
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Turn Rate
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Bump Penalty

        var totalMoveSpeed = (baseMoveSpeed + totalArr[0]).toFixed(2)
        var totalPowerMoveSpeed = (powerMoveSpeed + totalArr[1]).toFixed(2)
        var totalOverheatLimit = baseOverheatLimit + totalArr[2]
        var totalChargeTime = (baseChargeTime / (1 + totalArr[3])).toFixed(2)
        var totalCoolingRate = baseCoolingRate * (1 + totalArr[4])
        var totalTurnRate = baseTurnRate * (1 + totalArr[5])
        var totalBumpPenalty = (baseBumpPenalty / (1 + totalArr[6])).toFixed(2)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = (baseMoveSpeed + addon1Arr[0]).toFixed(2)
        var totalPowerMoveSpeed = (powerMoveSpeed + addon1Arr[1]).toFixed(2)
        var totalOverheatLimit = baseOverheatLimit + addon1Arr[2]
        var totalChargeTime = (baseChargeTime / (1 + addon1Arr[3])).toFixed(2)
        var totalCoolingRate = baseCoolingRate * (1 + addon1Arr[4])
        var totalTurnRate = baseTurnRate * (1 + addon1Arr[5])
        var totalBumpPenalty = (baseBumpPenalty / (1 + addon1Arr[6])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = (baseMoveSpeed + addon2Arr[0]).toFixed(2)
        var totalPowerMoveSpeed = (powerMoveSpeed + addon2Arr[1]).toFixed(2)
        var totalOverheatLimit = baseOverheatLimit + addon2Arr[2]
        var totalChargeTime = (baseChargeTime / (1 + addon2Arr[3])).toFixed(2)
        var totalCoolingRate = baseCoolingRate * (1 + addon2Arr[4])
        var totalTurnRate = baseTurnRate * (1 + addon2Arr[5])
        var totalBumpPenalty = (baseBumpPenalty / (1 + addon2Arr[6])).toFixed(2)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalPowerMoveSpeed
      document.getElementById("powermod2").value = totalOverheatLimit
      document.getElementById("powermod3").value = totalChargeTime
      document.getElementById("powermod4").value = totalCoolingRate
      document.getElementById("powermod5").value = totalTurnRate
      document.getElementById("powermod6").value = totalBumpPenalty
      M.updateTextFields()
      break
      
      case "NURSE":
      var baseMoveSpeed = 3.85
      var powerMoveSpeed = 13.33
      var baseBlinkChargeTime = 2.0
      var baseBlinkRange = 20
      var baseBlinkRechargeTime = 3.0
      var baseFatigue = 2.0
      var baseChainBlinkFatigue = 0.5
      var baseChainBlinkWindow = 1.5

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Power Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Blink Charge Time
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Blink Range
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Blink Recharge Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Fatigue
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Chain Blink Fatigue
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Chain Blink Window

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalPowerMoveSpeed = powerMoveSpeed + totalArr[1]
        var totalBlinkChargeTime = baseBlinkChargeTime * (1 + totalArr[2])
        var totalBlinkRange = baseBlinkRange + totalArr[3]
        var totalBlinkRechargeTime = baseBlinkRechargeTime + totalArr[4]
        var totalFatigue = baseFatigue + totalArr[5]
        var totalChainBlinkFatigue = baseChainBlinkFatigue + totalArr[6]
        var totalChainBlinkWindow = (baseChainBlinkWindow / (1 - totalArr[7])).toFixed(2)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalPowerMoveSpeed = powerMoveSpeed + addon1Arr[1]
        var totalBlinkChargeTime = baseBlinkChargeTime * (1 + addon1Arr[2])
        var totalBlinkRange = baseBlinkRange + addon1Arr[3]
        var totalBlinkRechargeTime = baseBlinkRechargeTime + addon1Arr[4]
        var totalFatigue = baseFatigue + addon1Arr[5]
        var totalChainBlinkFatigue = baseChainBlinkFatigue + addon1Arr[6]
        var totalChainBlinkWindow = (baseChainBlinkWindow / (1 - addon1Arr[7])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalPowerMoveSpeed = powerMoveSpeed + addon2Arr[1]
        var totalBlinkChargeTime = baseBlinkChargeTime * (1 + addon2Arr[2])
        var totalBlinkRange = baseBlinkRange + addon2Arr[3]
        var totalBlinkRechargeTime = baseBlinkRechargeTime + addon2Arr[4]
        var totalFatigue = baseFatigue + addon2Arr[5]
        var totalChainBlinkFatigue = baseChainBlinkFatigue + addon2Arr[6]
        var totalChainBlinkWindow = (baseChainBlinkWindow / (1 - addon2Arr[7])).toFixed(2)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalPowerMoveSpeed
      document.getElementById("powermod2").value = totalBlinkChargeTime
      document.getElementById("powermod3").value = totalBlinkRange
      document.getElementById("powermod4").value = totalBlinkRechargeTime
      document.getElementById("powermod5").value = totalFatigue
      document.getElementById("powermod6").value = totalChainBlinkFatigue
      document.getElementById("powermod7").value = totalChainBlinkWindow
      M.updateTextFields()
      break

      case "MYERS":
      var baseMoveSpeed = 4.6
      var stalkingMoveSpeed = 0.92
      var baseEW3Duration = 60
      var baseEW3EvilRequired = 5.0
      var baseStalkingRate = 0.8333 // TO BE CHECKED, wiki and int3ract don't match

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Stalking Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // EW3 Duration
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // EW3 Evil Required
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Stalking Rate
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalStalkingMoveSpeed = (stalkingMoveSpeed * (1 + totalArr[1])).toFixed(2)
        var totalEW3Duration = baseEW3Duration + totalArr[2]
        var totalEW3EvilRequired = (baseEW3EvilRequired * (1 + totalArr[3])).toFixed(2)
        var totalStalkingRate = (baseStalkingRate * (1 + totalArr[4])).toFixed(2)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalStalkingMoveSpeed = (stalkingMoveSpeed * (1 + addon1Arr[1])).toFixed(2)
        var totalEW3Duration = baseEW3Duration + addon1Arr[2]
        var totalEW3EvilRequired = (baseEW3EvilRequired * (1 + addon1Arr[3])).toFixed(2)
        var totalStalkingRate = (baseStalkingRate * (1 + addon1Arr[4])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalStalkingMoveSpeed = (stalkingMoveSpeed * (1 + addon2Arr[1])).toFixed(2)
        var totalEW3Duration = baseEW3Duration + addon2Arr[2]
        var totalEW3EvilRequired = (baseEW3EvilRequired * (1 + addon2Arr[3])).toFixed(2)
        var totalStalkingRate = (baseStalkingRate * (1 + addon2Arr[4])).toFixed(2)
      }
      if (totalEW3Duration > 200) {
        totalEW3Duration = Infinity
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalStalkingMoveSpeed
      document.getElementById("powermod2").value = totalEW3Duration
      document.getElementById("powermod3").value = totalEW3EvilRequired
      document.getElementById("powermod4").value = totalStalkingRate

      M.updateTextFields()
      break

      case "HAG":
      var baseMoveSpeed = 4.4
      var baseSettingTime = 1.0
      var addSettingTime = 1.2
      var baseTrippedDuration = 5.0
      var baseTeleportRange = 40
      var baseTrapTriggerRange = 3.0

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Setting Time
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Tripped Duration
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Teleport Range
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Trap Trigger Range

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalSettingTime = (addSettingTime + (baseSettingTime / (1 + totalArr[1]))).toFixed(2)
        var totalTrippedDuration = (baseTrippedDuration * (1 + totalArr[2])).toFixed(2)
        var totalTeleportRange = (baseTeleportRange * (1 + totalArr[3])).toFixed(2)
        var totalTrapTriggerRange = (baseTrapTriggerRange * (1 + totalArr[4])).toFixed(2)

      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalSettingTime = (addSettingTime + (baseSettingTime / (1 + addon1Arr[1]))).toFixed(2)
        var totalTrippedDuration = (baseTrippedDuration * (1 + addon1Arr[2])).toFixed(2)
        var totalTeleportRange = (baseTeleportRange * (1 + addon1Arr[3])).toFixed(2)
        var totalTrapTriggerRange = (baseTrapTriggerRange * (1 + addon1Arr[4])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalSettingTime = (addSettingTime + (baseSettingTime / (1 + addon2Arr[1]))).toFixed(2)
        var totalTrippedDuration = (baseTrippedDuration * (1 + addon2Arr[2])).toFixed(2)
        var totalTeleportRange = (baseTeleportRange * (1 + addon2Arr[3])).toFixed(2)
        var totalTrapTriggerRange = (baseTrapTriggerRange * (1 + addon2Arr[4])).toFixed(2)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalSettingTime
      document.getElementById("powermod2").value = totalTrippedDuration
      document.getElementById("powermod3").value = totalTeleportRange
      document.getElementById("powermod4").value = totalTrapTriggerRange
      
      M.updateTextFields()
      break

      case "DOCTOR":
      var baseMoveSpeed = 4.6
      var baseShockTherapyDetonation = 1
      var baseShockTherapyRange = 10
      var baseStaticBlastCD = 60

      if(addon1 !== addon2 && addon2 !== "" && addon1 != "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Shock Therapy Detonation Delay
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Shock Therapy Range
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Static Blast Cooldown

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalShockTherapyDetonation = baseShockTherapyDetonation + totalArr[1]
        var totalShockTherapyRange = baseShockTherapyRange + totalArr[2]
        var totalStaticBlastCD = baseStaticBlastCD + totalArr[3]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalShockTherapyDetonation = baseShockTherapyDetonation + addon1Arr[1]
        var totalShockTherapyRange = baseShockTherapyRange + addon1Arr[2]
        var totalStaticBlastCD = baseStaticBlastCD + addon1Arr[3]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalShockTherapyDetonation = baseShockTherapyDetonation + addon2Arr[1]
        var totalShockTherapyRange = baseShockTherapyRange + addon2Arr[2]
        var totalStaticBlastCD = baseStaticBlastCD + addon2Arr[3]
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalShockTherapyDetonation
      document.getElementById("powermod2").value = totalShockTherapyRange
      document.getElementById("powermod3").value = totalStaticBlastCD

      M.updateTextFields()
      break

      case "HUNTRESS":
      var baseMoveSpeed = 4.4
      var baseWindupSpeed = 3.08
      var baseHatchetCooldown = 2.0
      var baseHatchetWindupTimeMin = 1.0
      var baseHatchetWindupTimeMax = 3.0
      var baseHatchetReload = 4.0
      var baseHatchetFlightSpeedMin = 25
      var baseHatchetFlightSpeedMax = 40

      if(addon1 !== addon2 && addon2 !== "" && addon1 != "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Windup Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Hatchet Cooldown
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Hatchet Windup Time
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Hatchet Reload Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Hatchet Flight Speed

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalWindupSpeed = (baseWindupSpeed + (baseMoveSpeed * totalArr[1])).toFixed(2)
        var totalHatchetCooldown = (baseHatchetCooldown / (1 + totalArr[2])).toFixed(2)
        var totalHatchetWindupTimeMin = (baseHatchetWindupTimeMin * (1 - totalArr[3])).toFixed(2)
        var totalHatchetWindupTimeMax = (baseHatchetWindupTimeMax * (1 - totalArr[3])).toFixed(2)
        var totalHatchetReload = (baseHatchetReload / (1 + totalArr[4])).toFixed(2)
        var totalHatchetFlightSpeedMin = (baseHatchetFlightSpeedMin * (1 + totalArr[5])).toFixed(2)
        var totalHatchetFlightSpeedMax = (baseHatchetFlightSpeedMax * (1 + totalArr[5])).toFixed(2)

      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalWindupSpeed = (baseWindupSpeed + (baseMoveSpeed * addon1Arr[1])).toFixed(2)
        var totalHatchetCooldown = (baseHatchetCooldown / (1 + addon1Arr[2])).toFixed(2)
        var totalHatchetWindupTimeMin = (baseHatchetWindupTimeMin * (1 - addon1Arr[3])).toFixed(2)
        var totalHatchetWindupTimeMax = (baseHatchetWindupTimeMax * (1 - addon1Arr[3])).toFixed(2)
        var totalHatchetReload = (baseHatchetReload / (1 + addon1Arr[4])).toFixed(2)
        var totalHatchetFlightSpeedMin = (baseHatchetFlightSpeedMin * (1 + addon1Arr[5])).toFixed(2)
        var totalHatchetFlightSpeedMax = (baseHatchetFlightSpeedMax * (1 + addon1Arr[5])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalWindupSpeed = (baseWindupSpeed + (baseMoveSpeed * addon2Arr[1])).toFixed(2)
        var totalHatchetCooldown = (baseHatchetCooldown / (1 + addon2Arr[2])).toFixed(2)
        var totalHatchetWindupTimeMin = (baseHatchetWindupTimeMin * (1 - addon2Arr[3])).toFixed(2)
        var totalHatchetWindupTimeMax = (baseHatchetWindupTimeMax * (1 - addon2Arr[3])).toFixed(2)
        var totalHatchetReload = (baseHatchetReload / (1 + addon2Arr[4])).toFixed(2)
        var totalHatchetFlightSpeedMin = (baseHatchetFlightSpeedMin * (1 + addon2Arr[5])).toFixed(2)
        var totalHatchetFlightSpeedMax = (baseHatchetFlightSpeedMax * (1 + addon2Arr[5])).toFixed(2)
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalWindupSpeed
      document.getElementById("powermod2").value = totalHatchetCooldown
      document.getElementById("powermod3").value = totalHatchetWindupTimeMin
      document.getElementById("powermod4").value = totalHatchetWindupTimeMax 
      document.getElementById("powermod5").value = totalHatchetReload
      document.getElementById("powermod6").value = totalHatchetFlightSpeedMin
      document.getElementById("powermod7").value = totalHatchetFlightSpeedMax

      M.updateTextFields()
      break

      case "LEATHERFACE":
      var baseMoveSpeed = 4.6
      var baseChainsawChargeSpeed = 3.45
      var baseChainsawDashMaxSpeed = 5.29
      var baseHitCooldown = 2.0
      var baseMissCooldown = 1.5
      var tokenRechargeTime = 4.0
      var baseTantrumDuration = 5.0
      var baseTantrumByRevTime = 5.0
      var baseChainsawDashDuration = 2.0
      var baseChargeTime = 2.0

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Chainsaw Dash Max Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Cooldown (Hit)
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Token Recharge Time
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Tantrum Duration
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Tantrum by Rev Time
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Chainsaw Dash Duration
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Charge Time

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalChainsawDashSpeed = (baseChainsawDashMaxSpeed * (1 + totalArr[1])).toFixed(2)
        var totalHitCooldown = baseHitCooldown + totalArr[2]
        var totalTokenRechargeTime = tokenRechargeTime + totalArr[3]
        var totalTantrumDuration = baseTantrumDuration + totalArr[4]
        var totalTantrumByRevTime = baseTantrumByRevTime + totalArr[5]
        var totalChainsawDashDuration = baseChainsawDashDuration + totalArr[6]
        var totalChargeTime = (baseChargeTime * (1 + totalArr[7])).toFixed(2)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalChainsawDashSpeed = (baseChainsawDashMaxSpeed * (1 + addon1Arr[1])).toFixed(2)
        var totalHitCooldown = baseHitCooldown + addon1Arr[2]
        var totalTokenRechargeTime = tokenRechargeTime + addon1Arr[3]
        var totalTantrumDuration = baseTantrumDuration + addon1Arr[4]
        var totalTantrumByRevTime = baseTantrumByRevTime + addon1Arr[5]
        var totalChainsawDashDuration = baseChainsawDashDuration + addon1Arr[6]
        var totalChargeTime = (baseChargeTime * (1 + addon1Arr[7])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalChainsawDashSpeed = (baseChainsawDashMaxSpeed * (1 + addon2Arr[1])).toFixed(2)
        var totalHitCooldown = baseHitCooldown + addon2Arr[2]
        var totalTokenRechargeTime = tokenRechargeTime + addon2Arr[3]
        var totalTantrumDuration = baseTantrumDuration + addon2Arr[4]
        var totalTantrumByRevTime = baseTantrumByRevTime + addon2Arr[5]
        var totalChainsawDashDuration = baseChainsawDashDuration + addon2Arr[6]
        var totalChargeTime = (baseChargeTime * (1 + addon2Arr[7])).toFixed(2)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseChainsawChargeSpeed
      document.getElementById("powermod2").value = totalChainsawDashSpeed
      document.getElementById("powermod3").value = totalHitCooldown
      document.getElementById("powermod4").value = baseMissCooldown
      document.getElementById("powermod5").value = totalTokenRechargeTime
      document.getElementById("powermod6").value = totalTantrumDuration
      document.getElementById("powermod7").value = totalTantrumByRevTime
      document.getElementById("powermod8").value = totalChainsawDashDuration
      document.getElementById("powermod9").value = totalChargeTime

      M.updateTextFields()
      break

      case "FREDDY":
      var baseMoveSpeed = 4.6
      var dreamSnarePlacementMoveSpeed = 4.0
      var baseSkillCheckRegressionPenalty = 0.1
      var baseDreamProjectionCD = 45
      var dreamProjectionCDPerAsleepSurvivor = 6.75

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Skill Check Regression Penalty
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Dream Projection CD per asleep Survivor
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalSkillCheckRegressionPenalty = ((baseSkillCheckRegressionPenalty + totalArr[1])*100).toFixed(2)
        var totalDreamProjectionCDPerAsleepSurvivor = dreamProjectionCDPerAsleepSurvivor + totalArr[2]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        
        //convert to percentage
        var totalSkillCheckRegressionPenalty = ((baseSkillCheckRegressionPenalty + addon1Arr[1])*100).toFixed(2)
        var totalDreamProjectionCDPerAsleepSurvivor = dreamProjectionCDPerAsleepSurvivor + addon1Arr[2]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        
        //convert to percentage
        var totalSkillCheckRegressionPenalty = ((baseSkillCheckRegressionPenalty + addon2Arr[1])*100).toFixed(2)
        var totalDreamProjectionCDPerAsleepSurvivor = dreamProjectionCDPerAsleepSurvivor + addon2Arr[2]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = dreamSnarePlacementMoveSpeed
      document.getElementById("powermod2").value = totalSkillCheckRegressionPenalty 
      document.getElementById("powermod3").value = baseDreamProjectionCD
      document.getElementById("powermod4").value = totalDreamProjectionCDPerAsleepSurvivor

      M.updateTextFields()
      break

      case "PIG":
      var baseMoveSpeed = 4.6
      var baseCrouchMoveSpeed = 3.6
      var baseAmbushMoveSpeed = 6.9
      var baseAmbushMissCD = 2.0
      var baseAmbushChargeTime = 0.75
      var baseCrouchTime = 1.3
      var baseRBTDeathTimer = 150
      var baseJigsawBoxSearchTime = 12
      var baseRBTSettingTime = 3.3

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Crouch Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Ambush Move Speed
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Ambush Miss CD
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Ambush Charge Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Crouch Time
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // RBT Death Timer
        totalArr[7] = (1 - addon1Arr[7]) * (1 - addon2Arr[7]) // Jigsaw Box Search Time
        totalArr[8] = addon1Arr[8] + addon2Arr[8] // RBT Setting Time

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalCrouchMoveSpeed = (baseCrouchMoveSpeed * (1 + totalArr[1])).toFixed(2)
        var totalAmbushMoveSpeed = (baseAmbushMoveSpeed * (1 + totalArr[2])).toFixed(2)
        var totalAmbushMissCD = (baseAmbushMissCD * (1 - totalArr[3])).toFixed(2)
        var totalAmbushChargeTime = baseAmbushChargeTime + totalArr[4]
        var totalCrouchTime = (baseCrouchTime / (1 + totalArr[5])).toFixed(2)
        var totalRBTDeathTimer = baseRBTDeathTimer + totalArr[6]
        var totalJigsawBoxSearchTime = (baseJigsawBoxSearchTime / totalArr[7]).toFixed(2)
        var totalRBTSettingTime = (baseRBTSettingTime / (1 + totalArr[8])).toFixed(2)
      }

      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalCrouchMoveSpeed = (baseCrouchMoveSpeed * (1 + addon1Arr[1])).toFixed(2)
        var totalAmbushMoveSpeed = (baseAmbushMoveSpeed * (1 + addon1Arr[2])).toFixed(2)
        var totalAmbushMissCD = (baseAmbushMissCD / (1 + addon1Arr[3])).toFixed(2)
        var totalAmbushChargeTime = baseAmbushChargeTime + addon1Arr[4]
        var totalCrouchTime = (baseCrouchTime / (1 + addon1Arr[5])).toFixed(2)
        var totalRBTDeathTimer = baseRBTDeathTimer + addon1Arr[6]
        var totalJigsawBoxSearchTime = (baseJigsawBoxSearchTime / (1 - addon1Arr[7])).toFixed(2)
        var totalRBTSettingTime = (baseRBTSettingTime / (1 + addon1Arr[8])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalCrouchMoveSpeed = (baseCrouchMoveSpeed * (1 + addon2Arr[1])).toFixed(2)
        var totalAmbushMoveSpeed = (baseAmbushMoveSpeed * (1 + addon2Arr[2])).toFixed(2)
        var totalAmbushMissCD = (baseAmbushMissCD / (1 + addon2Arr[3])).toFixed(2)
        var totalAmbushChargeTime = baseAmbushChargeTime + addon2Arr[4]
        var totalCrouchTime = (baseCrouchTime / (1 + addon2Arr[5])).toFixed(2)
        var totalRBTDeathTimer = baseRBTDeathTimer + addon2Arr[6]
        var totalJigsawBoxSearchTime = (baseJigsawBoxSearchTime / (1 - addon2Arr[7])).toFixed(2)
        var totalRBTSettingTime = (baseRBTSettingTime / (1 + addon2Arr[8])).toFixed(2)
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalCrouchMoveSpeed
      document.getElementById("powermod2").value = totalAmbushMoveSpeed
      document.getElementById("powermod3").value = totalAmbushMissCD
      document.getElementById("powermod4").value = totalAmbushChargeTime
      document.getElementById("powermod5").value = totalCrouchTime
      document.getElementById("powermod6").value = totalRBTDeathTimer
      document.getElementById("powermod7").value = totalJigsawBoxSearchTime
      document.getElementById("powermod8").value = totalRBTSettingTime

      M.updateTextFields()
      break

      case "CLOWN":
      var baseMoveSpeed = 4.6
      var baseBottleReloadingSpeed = 1.61
      var baseInvigoratedSpeed = 5.06
      var baseHinderedPenalty = -0.6
      var baseBottleVelocityMin = 8.5
      var baseBottleVelocityMax = 14
      var baseBottleReloadTime = 3
      var baseBottleCooldown = 1
      var baseIntoxicatedDuration = 2
      var baseInvigoratedDuration = 5
      var baseTonicBottleAOERadius = 7.6
      var baseAntidoteBottleAOERadius = 6.35

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Reloading Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Hindered Speed Penalty
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Bottle Velocity (Min) 
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Bottle Velocity (Max)
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Bottle Reload Time 
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Bottle Cooldown
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Intoxicated Effect Duration
        totalArr[8] = addon1Arr[8] + addon2Arr[8] // Invigorated Effect Duration
        totalArr[9] = addon1Arr[9] + addon2Arr[9] // Tonic AOE Radius
        totalArr[10] = addon1Arr[10] + addon2Arr[10] // Antidote AOE Radius

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalBottleReloadingSpeed = (baseBottleReloadingSpeed * (1 + totalArr[1])).toFixed(2)
        var totalHinderedPenalty = baseHinderedPenalty + totalArr[2]
        var totalBottleVelocityMin = (baseBottleVelocityMin * (1 + totalArr[3])).toFixed(2)
        var totalBottleVelocityMax = (baseBottleVelocityMax * (1 + totalArr[4])).toFixed(2)
        var totalBottleReloadTime = baseBottleReloadTime + totalArr[5]
        var totalBottleCooldown = (baseBottleCooldown * (1 - totalArr[6])).toFixed(2)
        var totalIntoxicatedDuration = baseIntoxicatedDuration + totalArr[7]
        var totalInvigoratedDuration = baseInvigoratedDuration + totalArr[8]
        var totalTonicBottleAOERadius = (baseTonicBottleAOERadius * (1 + totalArr[9])).toFixed(2)
        var totalAntidoteBottleAOERadius = (baseAntidoteBottleAOERadius * (1 + totalArr[10])).toFixed(2)
      }

      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalBottleReloadingSpeed = (baseBottleReloadingSpeed * (1 + addon1Arr[1])).toFixed(2)
        var totalHinderedPenalty = baseHinderedPenalty + addon1Arr[2]
        var totalBottleVelocityMin = (baseBottleVelocityMin * (1 + addon1Arr[3])).toFixed(2)
        var totalBottleVelocityMax = (baseBottleVelocityMax * (1 + addon1Arr[4])).toFixed(2)
        var totalBottleReloadTime = baseBottleReloadTime + addon1Arr[5]
        var totalBottleCooldown = (baseBottleCooldown * (1 - addon1Arr[6])).toFixed(2)
        var totalIntoxicatedDuration = baseIntoxicatedDuration + addon1Arr[7]
        var totalInvigoratedDuration = baseInvigoratedDuration + addon1Arr[8]
        var totalTonicBottleAOERadius = (baseTonicBottleAOERadius * (1 + addon1Arr[9])).toFixed(2)
        var totalAntidoteBottleAOERadius = (baseAntidoteBottleAOERadius * (1 + addon1Arr[10])).toFixed(2)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalBottleReloadingSpeed = (baseBottleReloadingSpeed * (1 + addon2Arr[1])).toFixed(2)
        var totalHinderedPenalty = baseHinderedPenalty + addon2Arr[2]
        var totalBottleVelocityMin = (baseBottleVelocityMin * (1 + addon2Arr[3])).toFixed(2)
        var totalBottleVelocityMax = (baseBottleVelocityMax * (1 + addon2Arr[4])).toFixed(2)
        var totalBottleReloadTime = baseBottleReloadTime + addon2Arr[5]
        var totalBottleCooldown = (baseBottleCooldown * (1 - addon2Arr[6])).toFixed(2)
        var totalIntoxicatedDuration = baseIntoxicatedDuration + addon2Arr[7]
        var totalInvigoratedDuration = baseInvigoratedDuration + addon2Arr[8]
        var totalTonicBottleAOERadius = (baseTonicBottleAOERadius * (1 + addon2Arr[9])).toFixed(2)
        var totalAntidoteBottleAOERadius = (baseAntidoteBottleAOERadius * (1 + addon2Arr[10])).toFixed(2)
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalBottleReloadingSpeed
      document.getElementById("powermod2").value = baseInvigoratedSpeed
      document.getElementById("powermod3").value = totalHinderedPenalty
      document.getElementById("powermod4").value = totalBottleVelocityMin
      document.getElementById("powermod5").value = totalBottleVelocityMax
      document.getElementById("powermod6").value = totalBottleReloadTime
      document.getElementById("powermod7").value = totalBottleCooldown
      document.getElementById("powermod8").value = totalIntoxicatedDuration
      document.getElementById("powermod9").value = totalInvigoratedDuration
      document.getElementById("powermod10").value = totalTonicBottleAOERadius
      document.getElementById("powermod11").value = totalAntidoteBottleAOERadius 
      
      M.updateTextFields()
      break

      case "SPIRIT":
      var baseMoveSpeed = 4.4
      var baseHauntingMoveSpeed = 7.04
      var baseHauntingDuration = 5
      var baseHauntingRechargeRate = 0.333
      var baseHauntingRechargeTime = 15
      var baseHauntingActivationTime = 1.5
      var baseReappearanceSpeedBurstDuration = 0.5
      var baseAdditionalReappearanceSpeed = 0

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Haunting Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Haunting Duration
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Haunting Recharge Rate
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Haunting Activation Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Reappearance Speed Burst Duration
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Additional Reappearance Speed

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalHauntingMoveSpeed = (baseHauntingMoveSpeed + (baseMoveSpeed * totalArr[1])).toFixed(2)
        var totalHauntingDuration = baseHauntingDuration + totalArr[2]
        var totalHauntingRechargeRate = ((baseHauntingRechargeRate + totalArr[2]/15 + totalArr[3])).toFixed(3)
        var totalHauntingRechargeTime = (totalHauntingDuration / totalHauntingRechargeRate).toFixed(2)
        var totalHauntingActivationTime = (baseHauntingActivationTime * (1 + totalArr[4])).toFixed(2)
        var totalReappearanceSpeedBurstDuration = baseReappearanceSpeedBurstDuration + totalArr[5]
        var totalAdditionalReappearanceSpeed = 4 * (baseAdditionalReappearanceSpeed + totalArr[6])  //TODO
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalHauntingMoveSpeed = (baseHauntingMoveSpeed + (baseMoveSpeed * addon1Arr[1])).toFixed(2)
        var totalHauntingDuration = baseHauntingDuration + addon1Arr[2]
        var totalHauntingRechargeRate = ((baseHauntingRechargeRate + addon1Arr[2]/15 + addon1Arr[3])).toFixed(3)
        var totalHauntingRechargeTime = (totalHauntingDuration / totalHauntingRechargeRate).toFixed(2)
        var totalHauntingActivationTime = (baseHauntingActivationTime * (1 + addon1Arr[4])).toFixed(2)
        var totalReappearanceSpeedBurstDuration = baseReappearanceSpeedBurstDuration + addon1Arr[5]
        var totalAdditionalReappearanceSpeed = 4 * (baseAdditionalReappearanceSpeed + addon1Arr[6])  //TODO
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalHauntingMoveSpeed = (baseHauntingMoveSpeed + (baseMoveSpeed * addon2Arr[1])).toFixed(2)
        var totalHauntingDuration = baseHauntingDuration + addon2Arr[2]
        var totalHauntingRechargeRate = ((baseHauntingRechargeRate + addon2Arr[2]/15 + addon2Arr[3])).toFixed(3)
        var totalHauntingRechargeTime = (totalHauntingDuration / totalHauntingRechargeRate).toFixed(2)
        var totalHauntingActivationTime = (baseHauntingActivationTime * (1 + addon2Arr[4])).toFixed(2)
        var totalReappearanceSpeedBurstDuration = baseReappearanceSpeedBurstDuration + addon2Arr[5]
        var totalAdditionalReappearanceSpeed = 4 * (baseAdditionalReappearanceSpeed + addon2Arr[6])  //TODO
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalHauntingMoveSpeed
      document.getElementById("powermod2").value = totalHauntingDuration
      document.getElementById("powermod3").value = totalHauntingRechargeRate
      document.getElementById("powermod4").value = totalHauntingRechargeTime
      document.getElementById("powermod5").value = totalHauntingActivationTime
      document.getElementById("powermod6").value = totalReappearanceSpeedBurstDuration
      document.getElementById("powermod7").value = totalAdditionalReappearanceSpeed

      M.updateTextFields()
      break

      case "LEGION":
      var baseMoveSpeed = 4.6
      var baseFeralFrenzyMoveSpeed = 5.2
      var baseFeralFrenzyDuration = 10
      var baseFeralFrenzyRechargeTime = 20
      var baseFeralFrenzyRechargeRate = 0.5
      var baseFFKillerInstinctDetectionRadius = 40
      var baseFeralFrenzyMendingTime = 12
      var baseAdditionalMoveSpeedPerFFHit = 0.2
      var baseFeralFrenzy1HitMoveSpeed = ""
      var baseFeralFrenzy2HitMoveSpeed = ""
      var baseFeralFrenzy3HitMoveSpeed = ""
      var baseFeralFrenzy4HitMoveSpeed = ""

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Feral Frenzy Move Speed 
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Feral Frenzy Duration
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Feral Frenzy Recharge Time
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Feral Frenzy Killer Instinct Radius
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Feral Frenzy Mending Time
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Feral Frenzy Additional Move Speed Per Hit

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalFeralFrenzyMoveSpeed = baseFeralFrenzyMoveSpeed + totalArr[1]
        var totalFeralFrenzyDuration = baseFeralFrenzyDuration + totalArr[2]
        var totalFeralFrenzyRechargeTime = baseFeralFrenzyRechargeTime + totalArr[3]
        var totalFeralFrenzyRechargeRate = (totalFeralFrenzyDuration /totalFeralFrenzyRechargeTime).toFixed(2)
        var totalFFKillerInstinctDetectionRadius = baseFFKillerInstinctDetectionRadius + totalArr[4]
        var totalFeralFrenzyMendingTime = baseFeralFrenzyMendingTime + totalArr[5]
        var totalAdditionalMoveSpeedPerFFHit = baseAdditionalMoveSpeedPerFFHit + totalArr[6]
        var baseFeralFrenzy1HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit).toFixed(1)
        var baseFeralFrenzy2HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 2).toFixed(1)
        var baseFeralFrenzy3HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 3).toFixed(1)
        var baseFeralFrenzy4HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 4).toFixed(1)
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalFeralFrenzyMoveSpeed = baseFeralFrenzyMoveSpeed + addon1Arr[1]
        var totalFeralFrenzyDuration = baseFeralFrenzyDuration + addon1Arr[2]
        var totalFeralFrenzyRechargeTime = baseFeralFrenzyRechargeTime + addon1Arr[3]
        var totalFeralFrenzyRechargeRate = (totalFeralFrenzyDuration /totalFeralFrenzyRechargeTime).toFixed(2)
        var totalFFKillerInstinctDetectionRadius = baseFFKillerInstinctDetectionRadius + addon1Arr[4]
        var totalFeralFrenzyMendingTime = baseFeralFrenzyMendingTime + addon1Arr[5]
        var totalAdditionalMoveSpeedPerFFHit = baseAdditionalMoveSpeedPerFFHit + addon1Arr[6]
        var baseFeralFrenzy1HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit).toFixed(1)
        var baseFeralFrenzy2HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 2).toFixed(1)
        var baseFeralFrenzy3HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 3).toFixed(1)
        var baseFeralFrenzy4HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 4).toFixed(1)
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalFeralFrenzyMoveSpeed = baseFeralFrenzyMoveSpeed + addon2Arr[1]
        var totalFeralFrenzyDuration = baseFeralFrenzyDuration + addon2Arr[2]
        var totalFeralFrenzyRechargeTime = baseFeralFrenzyRechargeTime + addon2Arr[3]
        var totalFeralFrenzyRechargeRate = (totalFeralFrenzyDuration /totalFeralFrenzyRechargeTime).toFixed(2)
        var totalFFKillerInstinctDetectionRadius = baseFFKillerInstinctDetectionRadius + addon2Arr[4]
        var totalFeralFrenzyMendingTime = baseFeralFrenzyMendingTime + addon2Arr[5]
        var totalAdditionalMoveSpeedPerFFHit = baseAdditionalMoveSpeedPerFFHit + addon2Arr[6]
        var baseFeralFrenzy1HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit).toFixed(1)
        var baseFeralFrenzy2HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 2).toFixed(1)
        var baseFeralFrenzy3HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 3).toFixed(1)
        var baseFeralFrenzy4HitMoveSpeed = (totalFeralFrenzyMoveSpeed + totalAdditionalMoveSpeedPerFFHit * 4).toFixed(1)
      }
      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalFeralFrenzyMoveSpeed.toFixed(1)
      document.getElementById("powermod2").value = totalFeralFrenzyDuration
      document.getElementById("powermod3").value = totalFeralFrenzyRechargeTime
      document.getElementById("powermod4").value = totalFeralFrenzyRechargeRate
      document.getElementById("powermod5").value = totalFFKillerInstinctDetectionRadius
      document.getElementById("powermod6").value = totalFeralFrenzyMendingTime
      document.getElementById("powermod7").value = totalAdditionalMoveSpeedPerFFHit
      document.getElementById("powermod8").value = baseFeralFrenzy1HitMoveSpeed
      document.getElementById("powermod9").value = baseFeralFrenzy2HitMoveSpeed
      document.getElementById("powermod10").value = baseFeralFrenzy3HitMoveSpeed
      document.getElementById("powermod11").value = baseFeralFrenzy4HitMoveSpeed

      M.updateTextFields()
      break

      case "PLAGUE":
      var baseMoveSpeed = 4.6
      var baseVilePurgeMoveSpeed = 4.4
      var baseCorruptPurgeMoveSpeed = 4.4
      var basePurgeCD = 1.5
      var basePurgeChargeTime = 1.5
      var basePurgeProjectileSpeed = 10.55
      var baseSicknessRequiredForInfection = 1.0
      var baseVilePurgeSicknessFromProjectile = 0.0125
      var baseObjectInfectedDuration = 40
      var baseSicknessFromInfectedObjects = 0.02
      var baseCorruptedPoolsOfDevotion = 1
      var baseCorruptPurgeDuration = 60

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Corrupt Purge Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Purge CD
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Purge Projectile Speed
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Sickness from Projectile
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Object Infection Duration
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Sickness from Infected Objects
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Corrupted Pools of devotion
        totalArr[8] = addon1Arr[8] + addon2Arr[8] // Corrupt Purge Duration
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalCorruptPurgeMoveSpeed = (baseCorruptPurgeMoveSpeed * (1 + totalArr[1])).toFixed(2)
        var totalPurgeCD = basePurgeCD + totalArr[2]
        var totalPurgeProjectileSpeed = (basePurgeProjectileSpeed * (1 + totalArr[3])).toFixed(2)
        var totalVilePurgeSicknessFromProjectile = (baseVilePurgeSicknessFromProjectile * 100 * (1 + totalArr[4])).toFixed(2)
        var totalObjectInfectedDuration = baseObjectInfectedDuration + totalArr[5]
        var totalSicknessfromInfectedObjects = (baseSicknessFromInfectedObjects * 100 * (1 + totalArr[6])).toFixed(2)
        var totalCorruptedPoolsOfDevotion = baseCorruptedPoolsOfDevotion + totalArr[7]
        var totalCorruptPurgeDuration = baseCorruptPurgeDuration + totalArr[8]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalCorruptPurgeMoveSpeed = (baseCorruptPurgeMoveSpeed * (1 + addon1Arr[1])).toFixed(2)
        var totalPurgeCD = basePurgeCD + addon1Arr[2]
        var totalPurgeProjectileSpeed = (basePurgeProjectileSpeed * (1 + addon1Arr[3])).toFixed(2)
        var totalVilePurgeSicknessFromProjectile = (baseVilePurgeSicknessFromProjectile * 100 * (1 + addon1Arr[4])).toFixed(2)
        var totalObjectInfectedDuration = baseObjectInfectedDuration + addon1Arr[5]
        var totalSicknessfromInfectedObjects = (baseSicknessFromInfectedObjects * 100 * (1 + addon1Arr[6])).toFixed(2)
        var totalCorruptedPoolsOfDevotion = baseCorruptedPoolsOfDevotion + addon1Arr[7]
        var totalCorruptPurgeDuration = baseCorruptPurgeDuration + addon1Arr[8]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalCorruptPurgeMoveSpeed = (baseCorruptPurgeMoveSpeed * (1 + addon2Arr[1])).toFixed(2)
        var totalPurgeCD = basePurgeCD + addon2Arr[2]
        var totalPurgeProjectileSpeed = (basePurgeProjectileSpeed * (1 + addon2Arr[3])).toFixed(2)
        var totalVilePurgeSicknessFromProjectile = (baseVilePurgeSicknessFromProjectile * 100 * (1 + addon2Arr[4])).toFixed(2)
        var totalObjectInfectedDuration = baseObjectInfectedDuration + addon2Arr[5]
        var totalSicknessfromInfectedObjects = (baseSicknessFromInfectedObjects * 100 * (1 + addon2Arr[6])).toFixed(2)
        var totalCorruptedPoolsOfDevotion = baseCorruptedPoolsOfDevotion + addon2Arr[7]
        var totalCorruptPurgeDuration = baseCorruptPurgeDuration + addon2Arr[8]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseVilePurgeMoveSpeed
      document.getElementById("powermod2").value = totalCorruptPurgeMoveSpeed
      document.getElementById("powermod3").value = totalPurgeCD
      document.getElementById("powermod4").value = basePurgeChargeTime
      document.getElementById("powermod5").value = totalPurgeProjectileSpeed
      document.getElementById("powermod6").value = baseSicknessRequiredForInfection * 100
      document.getElementById("powermod7").value = totalVilePurgeSicknessFromProjectile 
      document.getElementById("powermod8").value = totalObjectInfectedDuration 
      document.getElementById("powermod9").value = totalSicknessfromInfectedObjects
      document.getElementById("powermod10").value = totalCorruptedPoolsOfDevotion
      document.getElementById("powermod11").value = totalCorruptPurgeDuration

      M.updateTextFields()
      break

      case "GHOSTFACE":
      var baseMoveSpeed = 4.6
      var baseCrouchedMoveSpeed = 3.6
      var baseActiveStalkingStandingMoveSpeed = 0.92
      var baseTimeToMarkSurvivors = 5
      var baseTimeToGetRevealed = 1.5
      var baseNightShroudRecoveryTime = 24
      var baseMarkedDuration = 60
      var baseKillerInstinctDuration = 2
      var baseRevealDistance = 32

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Crouched Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Active Stalking (Standing) Move Speed
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Time to Mark Survivors (Not Leaning)
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Night Shroud Recovery Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Marked Duration
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Killer Instinct Duration
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Reveal Distance
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalCrouchedMoveSpeed = baseCrouchedMoveSpeed * (1 + totalArr[1])
        var totalActiveStalkingStandingMoveSpeed = baseActiveStalkingStandingMoveSpeed + (baseMoveSpeed * totalArr[2])
        var totalTimeToMarkSurvivors = (baseTimeToMarkSurvivors * (1 + totalArr[3])).toFixed(1)
        var totalNightShroudRecoveryTime = baseNightShroudRecoveryTime + totalArr[4]
        var totalMarkedDuration = baseMarkedDuration + totalArr[5]
        var totalKillerInstinctDuration = baseKillerInstinctDuration + totalArr[6]
        var totalRevealDistance = baseRevealDistance + totalArr[7]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalCrouchedMoveSpeed = baseCrouchedMoveSpeed * (1 + addon1Arr[1])
        var totalActiveStalkingStandingMoveSpeed = baseActiveStalkingStandingMoveSpeed + (baseMoveSpeed * addon1Arr[2])
        var totalTimeToMarkSurvivors = (baseTimeToMarkSurvivors * (1 + addon1Arr[3])).toFixed(1)
        var totalNightShroudRecoveryTime = baseNightShroudRecoveryTime + addon1Arr[4]
        var totalMarkedDuration = baseMarkedDuration + addon1Arr[5]
        var totalKillerInstinctDuration = baseKillerInstinctDuration + addon1Arr[6]
        var totalRevealDistance = baseRevealDistance + addon1Arr[7]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalCrouchedMoveSpeed = baseCrouchedMoveSpeed * (1 + addon2Arr[1])
        var totalActiveStalkingStandingMoveSpeed = baseActiveStalkingStandingMoveSpeed + (baseMoveSpeed * addon2Arr[2])
        var totalTimeToMarkSurvivors = (baseTimeToMarkSurvivors * (1 + addon2Arr[3])).toFixed(1)
        var totalNightShroudRecoveryTime = baseNightShroudRecoveryTime + addon2Arr[4]
        var totalMarkedDuration = baseMarkedDuration + addon2Arr[5]
        var totalKillerInstinctDuration = baseKillerInstinctDuration + addon2Arr[6]
        var totalRevealDistance = baseRevealDistance + addon2Arr[7]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalCrouchedMoveSpeed
      document.getElementById("powermod2").value = totalActiveStalkingStandingMoveSpeed
      document.getElementById("powermod3").value = totalTimeToMarkSurvivors
      document.getElementById("powermod4").value = baseTimeToGetRevealed
      document.getElementById("powermod5").value = totalNightShroudRecoveryTime
      document.getElementById("powermod6").value = totalMarkedDuration
      document.getElementById("powermod7").value = totalKillerInstinctDuration
      document.getElementById("powermod8").value = totalRevealDistance

      M.updateTextFields()
      break

      case "DEMOGORGON":
      var baseMoveSpeed = 4.6
      var baseShredMoveSpeed = 18.4
      var baseShredChargeMoveSpeed = 3.86
      var baseShredHitCD = 3
      var baseShredMissCD = 2.25
      var baseShredPalletBreakCD = 2
      var basePortalTraversalSpeed = 20
      var basePortalOpeningTime = 1
      var basePortalKillerInstinctRange = 4
      var basePortalSealingTime = 12
      var basePortalUndetectableEffect = 3
      var basePortalTraversalRecoveryTime = 10

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Shred Charge Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Shred Hit CD
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Shred Miss CD
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Shred Pallet Break CD
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Portal Traversal Speed
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Portal Opening Time
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Portal Killer Instinct Range
        totalArr[8] = (1 - (1 - addon1Arr[8]) * (1 - addon2Arr[8])) // Portal Sealing Time
        totalArr[9] = addon1Arr[9] + addon2Arr[9] // Portal Undetectable Effect
        totalArr[10] = addon1Arr[10] + addon2Arr[10] // Portal Traversal Recovery Time
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalShredChargeMoveSpeed = (baseShredChargeMoveSpeed * (1 + totalArr[1])).toFixed(2)
        var totalShredHitCD = (baseShredHitCD * (1 + totalArr[2])).toFixed(2)
        var totalShredMissCD = (baseShredMissCD * (1 + totalArr[3])).toFixed(2)
        var totalShredPalletBreakCD = (baseShredPalletBreakCD * (1 + totalArr[4])).toFixed(2)
        var totalPortalTraversalSpeed = (basePortalTraversalSpeed * (1 + totalArr[5])).toFixed(2)
        var totalPortalOpeningTime = (basePortalOpeningTime * (1 + totalArr[6])).toFixed(2)
        var totalPortalKillerInstinctRange = basePortalKillerInstinctRange + totalArr[7]
        var totalPortalSealingTime = basePortalSealingTime * (1 + totalArr[8])
        var totalPortalUndetectableEffect = basePortalUndetectableEffect + totalArr[9]
        var totalPortalTraversalRecoveryTime = basePortalTraversalRecoveryTime + totalArr[10]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalShredChargeMoveSpeed = (baseShredChargeMoveSpeed * (1 + addon1Arr[1])).toFixed(2)
        var totalShredHitCD = (baseShredHitCD * (1 + addon1Arr[2])).toFixed(2)
        var totalShredMissCD = (baseShredMissCD * (1 + addon1Arr[3])).toFixed(2)
        var totalShredPalletBreakCD = (baseShredPalletBreakCD * (1 + addon1Arr[4])).toFixed(2)
        var totalPortalTraversalSpeed = (basePortalTraversalSpeed * (1 + addon1Arr[5])).toFixed(2)
        var totalPortalOpeningTime = (basePortalOpeningTime * (1 + addon1Arr[6])).toFixed(2)
        var totalPortalKillerInstinctRange = basePortalKillerInstinctRange + addon1Arr[7]
        var totalPortalSealingTime = basePortalSealingTime * (1 + addon1Arr[8])
        var totalPortalUndetectableEffect = basePortalUndetectableEffect + addon1Arr[9]
        var totalPortalTraversalRecoveryTime = basePortalTraversalRecoveryTime + addon1Arr[10]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalShredChargeMoveSpeed = (baseShredChargeMoveSpeed * (1 + addon2Arr[1])).toFixed(2)
        var totalShredHitCD = (baseShredHitCD * (1 + addon2Arr[2])).toFixed(2)
        var totalShredMissCD = (baseShredMissCD * (1 + addon2Arr[3])).toFixed(2)
        var totalShredPalletBreakCD = (baseShredPalletBreakCD * (1 + addon2Arr[4])).toFixed(2)
        var totalPortalTraversalSpeed = (basePortalTraversalSpeed * (1 + addon2Arr[5])).toFixed(2)
        var totalPortalOpeningTime = (basePortalOpeningTime * (1 + addon2Arr[6])).toFixed(2)
        var totalPortalKillerInstinctRange = basePortalKillerInstinctRange + addon2Arr[7]
        var totalPortalSealingTime = basePortalSealingTime * (1 + addon2Arr[8])
        var totalPortalUndetectableEffect = basePortalUndetectableEffect + addon2Arr[9]
        var totalPortalTraversalRecoveryTime = basePortalTraversalRecoveryTime + addon2Arr[10]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseShredMoveSpeed
      document.getElementById("powermod2").value = totalShredChargeMoveSpeed
      document.getElementById("powermod3").value = totalShredHitCD
      document.getElementById("powermod4").value = totalShredMissCD
      document.getElementById("powermod5").value = totalShredPalletBreakCD
      document.getElementById("powermod6").value = totalPortalTraversalSpeed
      document.getElementById("powermod7").value =  totalPortalOpeningTime
      document.getElementById("powermod8").value =  totalPortalKillerInstinctRange
      document.getElementById("powermod9").value = totalPortalSealingTime
      document.getElementById("powermod10").value = totalPortalUndetectableEffect
      document.getElementById("powermod11").value = totalPortalTraversalRecoveryTime

      M.updateTextFields()
      break

      case "ONI":
      var baseMoveSpeed = 4.6
      var baseBloodOrbAbsorptionMoveSpeed = 3.45
      var baseBloodOrbAttractionDistance = 6
      var baseDemonDashMoveSpeed = 7.82
      var baseDemonDashChargeTime = 2
      var baseDemonStrikeChargeTime = 2
      var baseDemonStrikeChargeThreshold = 0.35
      var baseBloodFuryActivationTime = 3
      var baseBloodFuryDeactivationTime = 3
      var baseBloodFuryDuration = 45.45
      var baseBloodFuryPassiveRechargeRate = 0.2
      var baseBloodFuryDownPenalty = -7

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Blood Orb Absorption Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Blood Orb Attraction Distance
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Demon Dash Move Speed
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Demon Dash Charge Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Blood Fury Activation Time 
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Blood Fury Deactivation Time 
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Blood Fury Duration 
        totalArr[8] = addon1Arr[8] + addon2Arr[8] // Blood Fury Passive Recharge Rate  
        totalArr[9] = addon1Arr[9] + addon2Arr[9] // Blood Fury Down Penalty 
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalBloodOrbAbsorptionMoveSpeed = baseBloodOrbAbsorptionMoveSpeed + totalArr[1]
        var totalBloodOrbAttractionDistance = baseBloodOrbAttractionDistance + totalArr[2]
        var totalDemonDashMoveSpeed = baseDemonDashMoveSpeed + totalArr[3]
        var totalDemonDashChargeTime = baseDemonDashChargeTime + totalArr[4]
        var totalBloodFuryActivationTime = baseBloodFuryActivationTime + totalArr[5]
        var totalBloodFuryDeactivationTime = baseBloodFuryDeactivationTime + totalArr[6]
        var totalBloodFuryDuration = baseBloodFuryDuration + totalArr[7]
        var totalBloodFuryPassiveRechargeRate = baseBloodFuryPassiveRechargeRate + totalArr[8]
        var totalBloodFuryDownPenalty = baseBloodFuryDownPenalty + totalArr[9]
      }

      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalBloodOrbAbsorptionMoveSpeed = baseBloodOrbAbsorptionMoveSpeed + addon1Arr[1]
        var totalBloodOrbAttractionDistance = baseBloodOrbAttractionDistance + addon1Arr[2]
        var totalDemonDashMoveSpeed = baseDemonDashMoveSpeed + addon1Arr[3]
        var totalDemonDashChargeTime = baseDemonDashChargeTime + addon1Arr[4]
        var totalBloodFuryActivationTime = baseBloodFuryActivationTime + addon1Arr[5]
        var totalBloodFuryDeactivationTime = baseBloodFuryDeactivationTime + addon1Arr[6]
        var totalBloodFuryDuration = baseBloodFuryDuration + addon1Arr[7]
        var totalBloodFuryPassiveRechargeRate = baseBloodFuryPassiveRechargeRate + addon1Arr[8]
        var totalBloodFuryDownPenalty = baseBloodFuryDownPenalty + addon1Arr[9]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalBloodOrbAbsorptionMoveSpeed = baseBloodOrbAbsorptionMoveSpeed + addon2Arr[1]
        var totalBloodOrbAttractionDistance = baseBloodOrbAttractionDistance + addon2Arr[2]
        var totalDemonDashMoveSpeed = baseDemonDashMoveSpeed + addon2Arr[3]
        var totalDemonDashChargeTime = baseDemonDashChargeTime + addon2Arr[4]
        var totalBloodFuryActivationTime = baseBloodFuryActivationTime + addon2Arr[5]
        var totalBloodFuryDeactivationTime = baseBloodFuryDeactivationTime + addon2Arr[6]
        var totalBloodFuryDuration = baseBloodFuryDuration + addon2Arr[7]
        var totalBloodFuryPassiveRechargeRate = baseBloodFuryPassiveRechargeRate + addon2Arr[8]
        var totalBloodFuryDownPenalty = baseBloodFuryDownPenalty + addon2Arr[9]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalBloodOrbAbsorptionMoveSpeed
      document.getElementById("powermod2").value = totalBloodOrbAttractionDistance
      document.getElementById("powermod3").value = totalDemonDashMoveSpeed
      document.getElementById("powermod4").value = totalDemonDashChargeTime
      document.getElementById("powermod5").value = baseDemonStrikeChargeTime
      document.getElementById("powermod6").value = baseDemonStrikeChargeThreshold
      document.getElementById("powermod7").value = totalBloodFuryActivationTime
      document.getElementById("powermod8").value = totalBloodFuryDeactivationTime
      document.getElementById("powermod9").value = totalBloodFuryDuration
      document.getElementById("powermod10").value = totalBloodFuryPassiveRechargeRate
      document.getElementById("powermod11").value = totalBloodFuryDownPenalty
      
      M.updateTextFields()
      break

      case "DEATHSLINGER":
      var baseMoveSpeed = 4.4
      var baseADSMoveSpeed = 3.74
      var baseHarpoonReloadingMoveSpeed = 2.06
      var baseHarpoonProjectileSpeed = 40.0
      var baseHarpoonFiringDelay = 0.5
      var baseHarpoonMaxRange = 18
      var baseHarpoonMissedShotCooldown = 1.5
      var baseHarpoonReloadTime = 2.75
      var baseHarpoonReelingSpeed = 2.6
      var baseHarpoonMendingTime = 12
      var baseHarpoonStunDuration = 4
      var baseADSTerrorRadius = 24

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // ADS Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Cooldown after Missed Shots
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Reload Time 
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Reeling Speed
        totalArr[5] = baseHarpoonMendingTime * (1 - ((1 - (addon1Arr[5]/baseHarpoonMendingTime)) * (1 - (addon2Arr[5]/baseHarpoonMendingTime)))) // Mending Time
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Stun Duration
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // ADS Terror Radius

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalADSMoveSpeed = (baseADSMoveSpeed + (totalArr[1] * baseMoveSpeed)).toFixed(2)
        var totalHarpoonMissedShotCooldown = baseHarpoonMissedShotCooldown + totalArr[2]
        var totalHarpoonReloadTime = baseHarpoonReloadTime + totalArr[3]
        var totalHarpoonReelingSpeed = (baseHarpoonReelingSpeed + totalArr[4]).toFixed(2)
        var totalHarpoonMendingTime = (baseHarpoonMendingTime + totalArr[5]).toFixed(2)
        var totalHarpoonStunDuration = baseHarpoonStunDuration + totalArr[6]
        var totalADSTerrorRadius = baseADSTerrorRadius + totalArr[7]
      }

      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalADSMoveSpeed = (baseADSMoveSpeed + (addon1Arr[1] * baseMoveSpeed)).toFixed(2)
        var totalHarpoonMissedShotCooldown = baseHarpoonMissedShotCooldown + addon1Arr[2]
        var totalHarpoonReloadTime = baseHarpoonReloadTime + addon1Arr[3]
        var totalHarpoonReelingSpeed = (baseHarpoonReelingSpeed + addon1Arr[4]).toFixed(2)
        var totalHarpoonMendingTime = baseHarpoonMendingTime + addon1Arr[5]
        var totalHarpoonStunDuration = baseHarpoonStunDuration + addon1Arr[6]
        var totalADSTerrorRadius = baseADSTerrorRadius + addon1Arr[7]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalADSMoveSpeed = (baseADSMoveSpeed + (addon2Arr[1] * baseMoveSpeed)).toFixed(2)
        var totalHarpoonMissedShotCooldown = baseHarpoonMissedShotCooldown + addon2Arr[2]
        var totalHarpoonReloadTime = baseHarpoonReloadTime + addon2Arr[3]
        var totalHarpoonReelingSpeed = (baseHarpoonReelingSpeed + addon2Arr[4]).toFixed(2)
        var totalHarpoonMendingTime = baseHarpoonMendingTime + addon2Arr[5]
        var totalHarpoonStunDuration = baseHarpoonStunDuration + addon2Arr[6]
        var totalADSTerrorRadius = baseADSTerrorRadius + addon2Arr[7]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalADSMoveSpeed
      document.getElementById("powermod2").value = baseHarpoonReloadingMoveSpeed
      document.getElementById("powermod3").value = baseHarpoonProjectileSpeed
      document.getElementById("powermod4").value = baseHarpoonFiringDelay
      document.getElementById("powermod5").value = baseHarpoonMaxRange
      document.getElementById("powermod6").value = totalHarpoonMissedShotCooldown
      document.getElementById("powermod7").value = totalHarpoonReloadTime
      document.getElementById("powermod8").value = totalHarpoonReelingSpeed
      document.getElementById("powermod9").value = totalHarpoonMendingTime
      document.getElementById("powermod10").value = totalHarpoonStunDuration
      document.getElementById("powermod11").value = totalADSTerrorRadius

      M.updateTextFields()
      break

      case "PYRAMID HEAD":
      var baseMoveSpeed = 4.6
      var baseRitesOfJudgementMoveSpeed = 4.4
      var baseRitesOfJudgementActivationTime = 1  // Activation/ Cancellation Time
      var baseTormentAttackCooldown = 2.25
      var baseTormentAttackRange = 8
      var baseRitesOfJudgementPowerDuration = 5
      var baseRitesOfJudgementPowerRechargeRate = 0.25
      var baseRitesOfJudgementPowerRechargeTime = 20
      var baseTormentKillerInstinctDuration = 3
      var baseTormentTrailsDespawnTime = 75

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Torment Attack Range 
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Rites of Judgement Power Duration
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Rites of Judgement Power Recharge Time
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Torment Killer Instinct Duration
        totalArr[5] = addon1Arr[5] * addon2Arr[5] // Torment Trails Despawn Time
        
        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalTormentAttackRange = baseTormentAttackRange + totalArr[1]
        var totalRitesOfJudgementPowerDuration = baseRitesOfJudgementPowerDuration + totalArr[2]
        var totalRitesOfJudgementPowerRechargeTime = baseRitesOfJudgementPowerRechargeTime + totalArr[3]
        var totalRitesOfJudgementPowerRechargeRate = (totalRitesOfJudgementPowerDuration/ totalRitesOfJudgementPowerRechargeTime).toFixed(3)
        var totalTormentKillerInstinctDuration = baseTormentKillerInstinctDuration + totalArr[4]
        var totalTormentTrailsDespawnTime = baseTormentTrailsDespawnTime + totalArr[5]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalTormentAttackRange = baseTormentAttackRange + addon1Arr[1]
        var totalRitesOfJudgementPowerDuration = baseRitesOfJudgementPowerDuration + addon1Arr[2]
        var totalRitesOfJudgementPowerRechargeTime = baseRitesOfJudgementPowerRechargeTime + addon1Arr[3]
        var totalRitesOfJudgementPowerRechargeRate = (totalRitesOfJudgementPowerDuration/ totalRitesOfJudgementPowerRechargeTime).toFixed(3)
        var totalTormentKillerInstinctDuration = baseTormentKillerInstinctDuration + addon1Arr[4]
        var totalTormentTrailsDespawnTime = baseTormentTrailsDespawnTime + addon1Arr[5]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalTormentAttackRange = baseTormentAttackRange + addon2Arr[1]
        var totalRitesOfJudgementPowerDuration = baseRitesOfJudgementPowerDuration + addon2Arr[2]
        var totalRitesOfJudgementPowerRechargeTime = baseRitesOfJudgementPowerRechargeTime + addon2Arr[3]
        var totalRitesOfJudgementPowerRechargeRate = (totalRitesOfJudgementPowerDuration/ totalRitesOfJudgementPowerRechargeTime).toFixed(3)
        var totalTormentKillerInstinctDuration = baseTormentKillerInstinctDuration + addon2Arr[4]
        var totalTormentTrailsDespawnTime = baseTormentTrailsDespawnTime + addon2Arr[5]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseRitesOfJudgementMoveSpeed
      document.getElementById("powermod2").value = baseRitesOfJudgementActivationTime
      document.getElementById("powermod3").value = baseTormentAttackCooldown
      document.getElementById("powermod4").value = totalTormentAttackRange
      document.getElementById("powermod5").value = totalRitesOfJudgementPowerDuration
      document.getElementById("powermod6").value = totalRitesOfJudgementPowerRechargeTime
      document.getElementById("powermod7").value = totalRitesOfJudgementPowerRechargeRate
      document.getElementById("powermod8").value = totalTormentKillerInstinctDuration
      document.getElementById("powermod9").value = totalTormentTrailsDespawnTime
      

      M.updateTextFields()
      break

      
      case "BLIGHT":
      var baseMoveSpeed = 4.6
      var baseRushSpeed = 9.2
      var baseRushRechargeRate = 2
      var baseRushTokens = 5
      var baseRushFatigue = 2.5
      var baseSpeedMultiplierPerRush = 0
      var baseLethalRushSpeed = 9.2
      var baseLethalRush1Speed = ""
      var baseLethalRush2Speed = ""
      var baseLethalRush3Speed = ""
      var baseLethalRush4Speed = ""
      var baseLethalRush5Speed = ""
      var baseLethalRush6Speed = ""

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Base Rush Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Rush Token Recharge Rate
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Rush Tokens 
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Rush Fatigue Duration
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Speed Multiplier Per Rush
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Base Lethal Rush Speed

        var totalBaseLethalRushSpeed = baseLethalRushSpeed * (1 + totalArr[6])
        var totalRushTokens = baseRushTokens + totalArr[3]

        if(totalArr[5] > 0.0 && totalRushTokens >=4) {
          var mul = totalArr[5]                   // Set Multiplier for Lethal Rushes
          baseLethalRush1Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (mul)).toFixed(2)
          baseLethalRush2Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (2*mul)).toFixed(2)
          baseLethalRush3Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (3*mul)).toFixed(2)
          if(totalRushTokens >= 5) {
            baseLethalRush4Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (4*mul)).toFixed(2)
            if(totalRushTokens > 6 ) {
              baseLethalRush5Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (5*mul)).toFixed(2)
              baseLethalRush6Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (6*mul)).toFixed(2)
            }
          }
        }

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalRushSpeed = baseRushSpeed * (1 + totalArr[1])
        var totalRushRechargeRate = baseRushRechargeRate + totalArr[2]
        
        var totalRushFatigue = baseRushFatigue + totalArr[4]
        var totalSpeedMultiplierPerRush = baseSpeedMultiplierPerRush + totalArr[5]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalBaseLethalRushSpeed = baseLethalRushSpeed * (1 + addon1Arr[6])
        var totalRushTokens = baseRushTokens + addon1Arr[3]

        if(addon1Arr[5] > 0 && totalRushTokens >= 4) {
          var mul = addon1Arr[5]                   // Set Multiplier for Lethal Rushes
          baseLethalRush1Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (mul)).toFixed(2)
          baseLethalRush2Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (2*mul)).toFixed(2)
          baseLethalRush3Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (3*mul)).toFixed(2)
          if(totalRushTokens >= 5) {
            baseLethalRush4Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (4*mul)).toFixed(2) 
            if(totalRushTokens > 6 ) {
              baseLethalRush5Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (5*mul)).toFixed(2)
              baseLethalRush6Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (6*mul)).toFixed(2)
            }
          }
        }

        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalRushSpeed = baseRushSpeed * (1 + addon1Arr[1])
        var totalRushRechargeRate = baseRushRechargeRate + addon1Arr[2]
        var totalRushTokens = baseRushTokens + addon1Arr[3]
        var totalRushFatigue = baseRushFatigue + addon1Arr[4]
        var totalSpeedMultiplierPerRush = baseSpeedMultiplierPerRush + addon1Arr[5]
      }
      else if(addon1 === "") {
        var totalBaseLethalRushSpeed = baseLethalRushSpeed * (1 + addon2Arr[6])
        var totalRushTokens = baseRushTokens + addon2Arr[3]

        if(addon2Arr[5] > 0 && totalRushTokens >= 4) {
          var mul = addon2Arr[5]                   // Set Multiplier for Lethal Rushes
          baseLethalRush1Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (mul)).toFixed(2)
          baseLethalRush2Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (2*mul)).toFixed(2)
          baseLethalRush3Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (3*mul)).toFixed(2)
          if(totalRushTokens >= 5) {
            baseLethalRush4Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (4*mul)).toFixed(2) 
            if(totalRushTokens > 6 ) {
              baseLethalRush5Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (5*mul)).toFixed(2)
              baseLethalRush6Speed = (totalBaseLethalRushSpeed + baseLethalRushSpeed * (6*mul)).toFixed(2)
            }
          }
        }

        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalRushSpeed = baseRushSpeed * (1 + addon2Arr[1])
        var totalRushRechargeRate = baseRushRechargeRate + addon2Arr[2]
        var totalRushTokens = baseRushTokens + addon2Arr[3]
        var totalRushFatigue = baseRushFatigue + addon2Arr[4]
        var totalSpeedMultiplierPerRush = baseSpeedMultiplierPerRush + addon2Arr[5]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalRushSpeed
      document.getElementById("powermod2").value = totalRushRechargeRate
      document.getElementById("powermod3").value = totalRushTokens
      document.getElementById("powermod4").value = totalRushFatigue
      document.getElementById("powermod5").value = totalSpeedMultiplierPerRush
      document.getElementById("powermod6").value = baseLethalRush1Speed
      document.getElementById("powermod7").value = baseLethalRush2Speed
      document.getElementById("powermod8").value = baseLethalRush3Speed
      document.getElementById("powermod9").value = baseLethalRush4Speed
      document.getElementById("powermod10").value = baseLethalRush5Speed
      document.getElementById("powermod11").value = baseLethalRush6Speed

      M.updateTextFields()
      break

      case "TWINS":
      var baseMoveSpeed = 4.6
      var baseVictorMoveSpeed = 6
      var baseVictorChargedPounceMoveSpeed = 2.4
      var baseVictorPounceChargeTime = 1
      var baseVictorPounceHitCD = 5
      var baseVictorPounceMissCD = 3
      var baseVictorUnbindingTime = 1
      var baseVictorCrushTime = 0.25
      var baseVictorToCharlotteSwitchCD = 3
      var baseVictorRemovalTime = 8

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Victor Move Speed 
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Victor Pounce Charge Time
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Victor Attack CD
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Victor Unbinding Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Victor Crushing Time
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Victor to Charlotte Switch CD
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Victor Removal Time

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalVictorMoveSpeed = baseVictorMoveSpeed + totalArr[1]
        var totalVictorPounceChargeTime = baseVictorPounceChargeTime + totalArr[2]
        var totalVictorPounceHitCD = baseVictorPounceHitCD + totalArr[3]
        var totalVictorPounceMissCD = baseVictorPounceMissCD + totalArr[3]
        var totalVictorUnbindingTime = baseVictorUnbindingTime + totalArr[4]
        var totalVictorCrushTime = baseVictorCrushTime + totalArr[5]
        var totalVictorToCharlotteSwitchCD = baseVictorToCharlotteSwitchCD + totalArr[6]
        var totalVictorRemovalTime = baseVictorRemovalTime + totalArr[7]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalVictorMoveSpeed = baseVictorMoveSpeed + addon1Arr[1]
        var totalVictorPounceChargeTime = baseVictorPounceChargeTime + addon1Arr[2]
        var totalVictorPounceHitCD = baseVictorPounceHitCD + addon1Arr[3]
        var totalVictorPounceMissCD = baseVictorPounceMissCD + addon1Arr[3]
        var totalVictorUnbindingTime = baseVictorUnbindingTime + addon1Arr[4]
        var totalVictorCrushTime = baseVictorCrushTime + addon1Arr[5]
        var totalVictorToCharlotteSwitchCD = baseVictorToCharlotteSwitchCD + addon1Arr[6]
        var totalVictorRemovalTime = baseVictorRemovalTime + addon1Arr[7]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalVictorMoveSpeed = baseVictorMoveSpeed + addon2Arr[1]
        var totalVictorPounceChargeTime = baseVictorPounceChargeTime + addon2Arr[2]
        var totalVictorPounceHitCD = baseVictorPounceHitCD + addon2Arr[3]
        var totalVictorPounceMissCD = baseVictorPounceMissCD + addon2Arr[3]
        var totalVictorUnbindingTime = baseVictorUnbindingTime + addon2Arr[4]
        var totalVictorCrushTime = baseVictorCrushTime + addon2Arr[5]
        var totalVictorToCharlotteSwitchCD = baseVictorToCharlotteSwitchCD + addon2Arr[6]
        var totalVictorRemovalTime = baseVictorRemovalTime + addon2Arr[7]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = totalVictorMoveSpeed
      document.getElementById("powermod2").value = baseVictorChargedPounceMoveSpeed
      document.getElementById("powermod3").value = totalVictorPounceChargeTime
      document.getElementById("powermod4").value = totalVictorPounceHitCD
      document.getElementById("powermod5").value = totalVictorPounceMissCD
      document.getElementById("powermod6").value = totalVictorUnbindingTime
      document.getElementById("powermod7").value = totalVictorCrushTime
      document.getElementById("powermod8").value = totalVictorToCharlotteSwitchCD
      document.getElementById("powermod9").value = totalVictorRemovalTime

      M.updateTextFields()
      break

      case "TRICKSTER":
      var baseMoveSpeed = 4.4
      var baseMainEventMoveSpeed = 3.86
      var baseInitialThrowStateMoveSpeed = 3.86
      var baseFinalThrowStateMoveSpeed = 3.68
      var baseStartingBlades = 44
      var baseBladeCapacity = 44
      var baseBladeProjectileSpeed = 55
      var baseMainEventDuration = 10
      var baseMainEventCooldown = 5
      var baseLacerationMeterDecayDelay = 15

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Initial Throw State Move Speed
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Eventual Throw State Move Speed
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Starting Blades + Capacity
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Main Event Duration
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Laceration Meter Decay Delay

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalInitialThrowStateMoveSpeed = (baseInitialThrowStateMoveSpeed + totalArr[1]).toFixed(2)
        var totalFinalThrowStateMoveSpeed = (baseFinalThrowStateMoveSpeed + totalArr[2]).toFixed(2)
        var totalStartingBlades = baseStartingBlades + totalArr[3]
        var totalBladeCapacity = baseBladeCapacity + totalArr[3]
        var totalMainEventDuration = (baseMainEventDuration * (1 + totalArr[4])).toFixed(2)
        var totalLacerationMeterDecayDelay = baseLacerationMeterDecayDelay + totalArr[5]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalInitialThrowStateMoveSpeed = (baseInitialThrowStateMoveSpeed + addon1Arr[1]).toFixed(2)
        var totalFinalThrowStateMoveSpeed = (baseFinalThrowStateMoveSpeed + addon1Arr[2]).toFixed(2)
        var totalStartingBlades = baseStartingBlades + addon1Arr[3]
        var totalBladeCapacity = baseBladeCapacity + addon1Arr[3]
        var totalMainEventDuration = (baseMainEventDuration * (1 + addon1Arr[4])).toFixed(2)
        var totalLacerationMeterDecayDelay = baseLacerationMeterDecayDelay + addon1Arr[5]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalInitialThrowStateMoveSpeed = (baseInitialThrowStateMoveSpeed + addon2Arr[1]).toFixed(2)
        var totalFinalThrowStateMoveSpeed = (baseFinalThrowStateMoveSpeed + addon2Arr[2]).toFixed(2)
        var totalStartingBlades = baseStartingBlades + addon2Arr[3]
        var totalBladeCapacity = baseBladeCapacity + addon2Arr[3]
        var totalMainEventDuration = (baseMainEventDuration * (1 + addon2Arr[4])).toFixed(2)
        var totalLacerationMeterDecayDelay = baseLacerationMeterDecayDelay + addon2Arr[5]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseMainEventMoveSpeed
      document.getElementById("powermod2").value = totalInitialThrowStateMoveSpeed
      document.getElementById("powermod3").value = totalFinalThrowStateMoveSpeed
      document.getElementById("powermod4").value = totalStartingBlades
      document.getElementById("powermod5").value = totalBladeCapacity
      document.getElementById("powermod6").value = baseBladeProjectileSpeed
      document.getElementById("powermod7").value = totalMainEventDuration
      document.getElementById("powermod8").value = baseMainEventCooldown
      document.getElementById("powermod9").value = totalLacerationMeterDecayDelay

      M.updateTextFields()
      break

      case "NEMESIS":
      var baseMoveSpeed = 4.6
      var tentacleStrikeM2MoveSpeed = 3.8
      var tentacleStrikeM3MoveSpeed = 4.0
      var baseMutationGainedFromUncontaminatedSurvivor = 3
      var baseMutationGainedFromContaminatedSurvivor = 1
      var baseMutationGainedFromZombie = 1
      var baseZombieMoveSpeed = 1.0
      var baseZombieDetectionRange = 14
      var baseZombieDetectionFOV = 190
      var baseVaccineInjectionTime = 3
      var baseVaccineKillerInstinctDuration = 3

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Mutation Gained from Survivor
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Mutation Gained from Zombie
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Zombie Move Speed
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Zombie Detection Range
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Zombie Detection FOV
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Vaccine Injection Time
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Vaccine Killer Instinct Duration

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalMutationGainedFromUncontaminatedSurvivor = baseMutationGainedFromUncontaminatedSurvivor + totalArr[1]
        var totalMutationGainedFromContaminatedSurvivor = baseMutationGainedFromContaminatedSurvivor + totalArr[1]
        var totalMutationGainedFromZombie = baseMutationGainedFromZombie + totalArr[2]
        var totalZombieMoveSpeed = baseZombieMoveSpeed + totalArr[3]
        var totalZombieDetectionRange = baseZombieDetectionRange + totalArr[4]
        var totalZombieDetectionFOV = baseZombieDetectionFOV + totalArr[5]
        var totalVaccineInjectionTime = baseVaccineInjectionTime + totalArr[6]
        var totalVaccineKillerInstinctDuration = baseVaccineKillerInstinctDuration + totalArr[7]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalMutationGainedFromUncontaminatedSurvivor = baseMutationGainedFromUncontaminatedSurvivor + addon1Arr[1]
        var totalMutationGainedFromContaminatedSurvivor = baseMutationGainedFromContaminatedSurvivor + addon1Arr[1]
        var totalMutationGainedFromZombie = baseMutationGainedFromZombie + addon1Arr[2]
        var totalZombieMoveSpeed = baseZombieMoveSpeed + addon1Arr[3]
        var totalZombieDetectionRange = baseZombieDetectionRange + addon1Arr[4]
        var totalZombieDetectionFOV = baseZombieDetectionFOV + addon1Arr[5]
        var totalVaccineInjectionTime = baseVaccineInjectionTime + addon1Arr[6]
        var totalVaccineKillerInstinctDuration = baseVaccineKillerInstinctDuration + addon1Arr[7]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalMutationGainedFromUncontaminatedSurvivor = baseMutationGainedFromUncontaminatedSurvivor + addon2Arr[1]
        var totalMutationGainedFromContaminatedSurvivor = baseMutationGainedFromContaminatedSurvivor + addon2Arr[1]
        var totalMutationGainedFromZombie = baseMutationGainedFromZombie + addon2Arr[2]
        var totalZombieMoveSpeed = baseZombieMoveSpeed + addon2Arr[3]
        var totalZombieDetectionRange = baseZombieDetectionRange + addon2Arr[4]
        var totalZombieDetectionFOV = baseZombieDetectionFOV + addon2Arr[5]
        var totalVaccineInjectionTime = baseVaccineInjectionTime + addon2Arr[6]
        var totalVaccineKillerInstinctDuration = baseVaccineKillerInstinctDuration + addon2Arr[7]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = tentacleStrikeM2MoveSpeed
      document.getElementById("powermod2").value = tentacleStrikeM3MoveSpeed
      document.getElementById("powermod3").value = totalMutationGainedFromUncontaminatedSurvivor
      document.getElementById("powermod4").value = totalMutationGainedFromContaminatedSurvivor 
      document.getElementById("powermod5").value = totalMutationGainedFromZombie
      document.getElementById("powermod6").value = totalZombieMoveSpeed
      document.getElementById("powermod7").value = totalZombieDetectionRange
      document.getElementById("powermod8").value = totalZombieDetectionFOV
      document.getElementById("powermod9").value = totalVaccineInjectionTime
      document.getElementById("powermod10").value = totalVaccineKillerInstinctDuration

      M.updateTextFields()
      break

      case "PINHEAD":
      var baseMoveSpeed = 4.6
      var baseChainStrikeMoveSpeed = 3.68
      var baseInitialPossessedChainMoveSpeed = 10
      var baseFinalPossessedChainMoveSpeed = 37.5  //MS after 0.7 seconds
      var baseAdditionalChainsSpawned = 3
      var baseChainsCooldown = 5
      var baseChainsYawTurnRate = 125
      var baseChainsPitchTurnRate = 100
      var baseChainHuntActivationTime = 90
      var baseGatewayCastingDistance = 16
      var basePossessedChainsTravelDistance = 24
      var baseLamentConfigurationSolvingTime = 6

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Additional Chains Spawned 
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Chains Cooldown 
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Chains Yaw/Pitch Turn Rate
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Chain Hunt Activation Time
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Gateway Casting Distance
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Possessed Chains Travel Distance
        totalArr[7] = baseLamentConfigurationSolvingTime * (1 - ((1 - addon1Arr[7]/baseLamentConfigurationSolvingTime) * (1 - addon2Arr[7]/baseLamentConfigurationSolvingTime))) // Lament Configuration Solving Time

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalAdditionalChainsSpawned = baseAdditionalChainsSpawned + totalArr[1]
        var totalChainsCooldown = baseChainsCooldown + totalArr[2]
        var totalChainsYawTurnRate = (baseChainsYawTurnRate * (1 + totalArr[3])).toFixed(2)
        var totalChainsPitchTurnRate = (baseChainsPitchTurnRate * (1 + totalArr[3])).toFixed(2)
        var totalChainHuntActivationTime = baseChainHuntActivationTime + totalArr[4]
        var totalGatewayCastingDistance = baseGatewayCastingDistance + totalArr[5]
        var totalPossessedChainsTravelDistance = basePossessedChainsTravelDistance + totalArr[6]
        var totalLamentConfigurationSolvingTime = baseLamentConfigurationSolvingTime + totalArr[7]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalAdditionalChainsSpawned = baseAdditionalChainsSpawned + addon1Arr[1]
        var totalChainsCooldown = baseChainsCooldown + addon1Arr[2]
        var totalChainsYawTurnRate = (baseChainsYawTurnRate * (1 + addon1Arr[3])).toFixed(2)
        var totalChainsPitchTurnRate = (baseChainsPitchTurnRate * (1 + addon1Arr[3])).toFixed(2)
        var totalChainHuntActivationTime = baseChainHuntActivationTime + addon1Arr[4]
        var totalGatewayCastingDistance = baseGatewayCastingDistance + addon1Arr[5]
        var totalPossessedChainsTravelDistance = basePossessedChainsTravelDistance + addon1Arr[6]
        var totalLamentConfigurationSolvingTime = baseLamentConfigurationSolvingTime + addon1Arr[7]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalAdditionalChainsSpawned = baseAdditionalChainsSpawned + addon2Arr[1]
        var totalChainsCooldown = baseChainsCooldown + addon2Arr[2]
        var totalChainsYawTurnRate = (baseChainsYawTurnRate * (1 + addon2Arr[3])).toFixed(2)
        var totalChainsPitchTurnRate = (baseChainsPitchTurnRate * (1 + addon2Arr[3])).toFixed(2)
        var totalChainHuntActivationTime = baseChainHuntActivationTime + addon2Arr[4]
        var totalGatewayCastingDistance = baseGatewayCastingDistance + addon2Arr[5]
        var totalPossessedChainsTravelDistance = basePossessedChainsTravelDistance + addon2Arr[6]
        var totalLamentConfigurationSolvingTime = baseLamentConfigurationSolvingTime + addon2Arr[7]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseChainStrikeMoveSpeed
      document.getElementById("powermod2").value = baseInitialPossessedChainMoveSpeed
      document.getElementById("powermod3").value = baseFinalPossessedChainMoveSpeed
      document.getElementById("powermod4").value = totalAdditionalChainsSpawned
      document.getElementById("powermod5").value = totalChainsCooldown
      document.getElementById("powermod6").value = totalChainsYawTurnRate
      document.getElementById("powermod7").value = totalChainsPitchTurnRate
      document.getElementById("powermod8").value = totalChainHuntActivationTime
      document.getElementById("powermod9").value = totalGatewayCastingDistance
      document.getElementById("powermod10").value = totalPossessedChainsTravelDistance
      document.getElementById("powermod11").value = totalLamentConfigurationSolvingTime

      M.updateTextFields()
      break

      case "ARTIST":
      var baseMoveSpeed = 4.6
      var baseSummoningMoveSpeed = 3.68
      var direCrowsInitialProjectileSpeed = 20
      var direCrowsEventualProjectileSpeed = 35   // Speed after 0.3 seconds
      var baseDireCrows = 3
      var baseDireCrowsDamagingPathLength = 7.5
      var baseDireCrowsIdleTimeBeforeDisintegrating = 10
      var baseBirdsOfTormentCDAfterDisintegrating = 2
      var baseSwarmRepelActionDuration = 8
      var baseDireCrowsFlashlightBurnTime = 1
      var baseDireCrowsKillerInstinctDuration = 3
      var baseDireCrowsKillerInstinctRadius = 4

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Number of Dire Crows
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Dire Crows Idle Time before Disintegrating
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Birds of Torment CD after Disintegrating
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // TODO - Swarm Repel Action Duration
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Dire Crows Killer Instinct Duration
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Dire Crows Killer Instinct Radius  

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalDireCrows = baseDireCrows + totalArr[1]
        var totalDireCrowsIdleTimeBeforeDisintegrating = baseDireCrowsIdleTimeBeforeDisintegrating + totalArr[2]
        var totalBirdsOfTormentCDAfterDisintegrating = baseBirdsOfTormentCDAfterDisintegrating + totalArr[3]
        var totalSwarmRepelActionDuration = baseSwarmRepelActionDuration + totalArr[4]
        var totalDireCrowsKillerInstinctDuration = baseDireCrowsKillerInstinctDuration + totalArr[5]
        var totalDireCrowsKillerInstinctRadius = baseDireCrowsKillerInstinctRadius + totalArr[6]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalDireCrows = baseDireCrows + addon1Arr[1]
        var totalDireCrowsIdleTimeBeforeDisintegrating = baseDireCrowsIdleTimeBeforeDisintegrating + addon1Arr[2]
        var totalBirdsOfTormentCDAfterDisintegrating = baseBirdsOfTormentCDAfterDisintegrating + addon1Arr[3]
        var totalSwarmRepelActionDuration = baseSwarmRepelActionDuration + addon1Arr[4]
        var totalDireCrowsKillerInstinctDuration = baseDireCrowsKillerInstinctDuration + addon1Arr[5]
        var totalDireCrowsKillerInstinctRadius = baseDireCrowsKillerInstinctRadius + addon1Arr[6]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalDireCrows = baseDireCrows + addon2Arr[1]
        var totalDireCrowsIdleTimeBeforeDisintegrating = baseDireCrowsIdleTimeBeforeDisintegrating + addon2Arr[2]
        var totalBirdsOfTormentCDAfterDisintegrating = baseBirdsOfTormentCDAfterDisintegrating + addon2Arr[3]
        var totalSwarmRepelActionDuration = baseSwarmRepelActionDuration + addon2Arr[4]
        var totalDireCrowsKillerInstinctDuration = baseDireCrowsKillerInstinctDuration + addon2Arr[5]
        var totalDireCrowsKillerInstinctRadius = baseDireCrowsKillerInstinctRadius + addon2Arr[6]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = baseSummoningMoveSpeed
      document.getElementById("powermod2").value = direCrowsInitialProjectileSpeed
      document.getElementById("powermod3").value = direCrowsEventualProjectileSpeed
      document.getElementById("powermod4").value = totalDireCrows
      document.getElementById("powermod5").value = baseDireCrowsDamagingPathLength
      document.getElementById("powermod6").value = totalDireCrowsIdleTimeBeforeDisintegrating
      document.getElementById("powermod7").value = totalBirdsOfTormentCDAfterDisintegrating 
      document.getElementById("powermod8").value = totalSwarmRepelActionDuration
      document.getElementById("powermod9").value = baseDireCrowsFlashlightBurnTime
      document.getElementById("powermod10").value = totalDireCrowsKillerInstinctDuration
      document.getElementById("powermod11").value = totalDireCrowsKillerInstinctRadius

      M.updateTextFields()
      break

      case "ONRYO":
      var baseMoveSpeed = 4.6
      var postProjectionMoveSpeedBurst = 6.9
      var basePostManifestInvisibilityDuration = 0.75
      var basePostManifestFlickeringDuration = 4
      var baseTVCooldownPostProjection = 100
      var baseTVCooldownTurnOff = 60
      var baseTapeCondemnedProgressTime = 25
      var baseDemanifestInvisibilityDuration = 1
      var baseDemanifestedVisibilityRadius = 32
      var basePostManualManifestUndetectableDuration = 1
      var basePostProjectionUndetectableDuration = 0

      if(addon1 !== addon2 && addon2 !== "" && addon1 !== "") {
        totalArr[0] = addon1Arr[0] + addon2Arr[0] // Move Speed
        totalArr[1] = addon1Arr[1] + addon2Arr[1] // Post Manifest Invisibility
        totalArr[2] = addon1Arr[2] + addon2Arr[2] // Post Manifest Flickering
        totalArr[3] = addon1Arr[3] + addon2Arr[3] // Post Projection TV Cooldown
        totalArr[4] = addon1Arr[4] + addon2Arr[4] // Turn Off TV Cooldown
        totalArr[5] = addon1Arr[5] + addon2Arr[5] // Tape Condemned Progress Time
        totalArr[6] = addon1Arr[6] + addon2Arr[6] // Demanifest Invisibility Duration
        totalArr[7] = addon1Arr[7] + addon2Arr[7] // Demanifest Invisibility Radius
        totalArr[8] = addon1Arr[8] + addon2Arr[8] // Manifesting/Projection Undetectable

        var totalMoveSpeed = baseMoveSpeed + totalArr[0]
        var totalPostManifestInvisibilityDuration = (basePostManifestInvisibilityDuration * (1 + totalArr[1])).toFixed(2)
        var totalPostManifestFlickeringDuration = basePostManifestFlickeringDuration + totalArr[2]
        var totalTVCooldownPostProjection = baseTVCooldownPostProjection + totalArr[3]
        var totalTVCooldownTurnOff = baseTVCooldownTurnOff + totalArr[4]
        var totalTapeCondemnedProgressTime = (baseTapeCondemnedProgressTime * (1 + totalArr[5])).toFixed(2)
        var totalDemanifestInvisibilityDuration = (baseDemanifestInvisibilityDuration * (1 + totalArr[6])).toFixed(2)
        var totalDemanifestVisibilityRadius = baseDemanifestedVisibilityRadius + totalArr[7]
        var totalPostManualManifestUndetectableDuration = basePostManualManifestUndetectableDuration + totalArr[8]
        var totalPostProjectionUndetectableDuration = basePostProjectionUndetectableDuration + totalArr[8]
      }
      else if(addon1 === addon2 || addon2 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon1Arr[0]
        var totalPostManifestInvisibilityDuration = (basePostManifestInvisibilityDuration * (1 + addon1Arr[1])).toFixed(2)
        var totalPostManifestFlickeringDuration = basePostManifestFlickeringDuration + addon1Arr[2]
        var totalTVCooldownPostProjection = baseTVCooldownPostProjection + addon1Arr[3]
        var totalTVCooldownTurnOff = baseTVCooldownTurnOff + addon1Arr[4]
        var totalTapeCondemnedProgressTime = (baseTapeCondemnedProgressTime * (1 + addon1Arr[5])).toFixed(2)
        var totalDemanifestInvisibilityDuration = (baseDemanifestInvisibilityDuration * (1 + addon1Arr[6])).toFixed(2)
        var totalDemanifestVisibilityRadius = baseDemanifestedVisibilityRadius + addon1Arr[7]
        var totalPostManualManifestUndetectableDuration = basePostManualManifestUndetectableDuration + addon1Arr[8]
        var totalPostProjectionUndetectableDuration = basePostProjectionUndetectableDuration + addon1Arr[8]
      }
      else if(addon1 === "") {
        var totalMoveSpeed = baseMoveSpeed + addon2Arr[0]
        var totalPostManifestInvisibilityDuration = (basePostManifestInvisibilityDuration * (1 + addon2Arr[1])).toFixed(2)
        var totalPostManifestFlickeringDuration = basePostManifestFlickeringDuration + addon2Arr[2]
        var totalTVCooldownPostProjection = baseTVCooldownPostProjection + addon2Arr[3]
        var totalTVCooldownTurnOff = baseTVCooldownTurnOff + addon2Arr[4]
        var totalTapeCondemnedProgressTime = (baseTapeCondemnedProgressTime * (1 + addon2Arr[5])).toFixed(2)
        var totalDemanifestInvisibilityDuration = (baseDemanifestInvisibilityDuration * (1 + addon2Arr[6])).toFixed(2)
        var totalDemanifestVisibilityRadius = baseDemanifestedVisibilityRadius + addon2Arr[7]
        var totalPostManualManifestUndetectableDuration = basePostManualManifestUndetectableDuration + addon2Arr[8]
        var totalPostProjectionUndetectableDuration = basePostProjectionUndetectableDuration + addon2Arr[8]
      }

      document.getElementById("basemovespeed").value = totalMoveSpeed
      document.getElementById("powermod1").value = postProjectionMoveSpeedBurst
      document.getElementById("powermod2").value = totalPostManifestInvisibilityDuration
      document.getElementById("powermod3").value = totalPostManifestFlickeringDuration
      document.getElementById("powermod4").value = totalTVCooldownPostProjection
      document.getElementById("powermod5").value = totalTVCooldownTurnOff
      document.getElementById("powermod6").value = totalTapeCondemnedProgressTime
      document.getElementById("powermod7").value = totalDemanifestInvisibilityDuration
      document.getElementById("powermod8").value = totalDemanifestVisibilityRadius
      document.getElementById("powermod9").value = totalPostManualManifestUndetectableDuration
      document.getElementById("powermod10").value = totalPostProjectionUndetectableDuration

      M.updateTextFields()
      break



        
        


    }
  }

  // Depending on each killer, calculate speed and 
  // modifiers 1 through 11 

  // switch(killer):
  // Check if addon2 === "" 
  // totalMod1-11 = variable1-11 + modifier1-11
  // else totalMod 1-11 = add(variable 1-11, modifier1-11, 2modifier1-11)
  // populate boxes1-11 with totalMod 1-11
  // M.updatefields()
  // END SWITCH



}


// Use button to clear addons and reset killer
document.getElementById("btn01").addEventListener("click", clickButton)

function clickButton() {
  clearAddons()
  populateTextboxes()
}

function clearAddons() {
  document.getElementById("addon1").selectedIndex = 0
  document.getElementById("addon2").selectedIndex = 0
  var elems = document.querySelector("#addon1")
  var elems2 = document.querySelector("#addon2")
  M.FormSelect.init(elems)
  M.FormSelect.init(elems2)
}

var addons =   [
  {
    Killer: "TRAPPER",
    Addon: "Trapper Gloves",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.3",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Padded Jaws",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Makeshift Wrap",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Bear Oil",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Wax Brick",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.33",
    AddonMod4: "0.33",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Serrated Jaws",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Lengthened Jaws",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Coffee Grinds",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "4-Coil Spring Kit",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.25",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Trapper Bag",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Tar Bottle",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Secondary Coil",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Rusted Jaws",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Fastening Tools",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.5",
    AddonMod2: "0",
    AddonMod3: "0.25",
    AddonMod4: "0.25",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Trapper Sack",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Tension Spring",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Oily Coil",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Honing Stone",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Iridescent Stone",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRAPPER",
    Addon: "Bloody Coil",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "The Serpent - Soot",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "The Hound - Soot",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "The Ghost - Soot",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "The Beast - Soot",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Bone Clapper",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Blink - Mud",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.4",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Windstorm - Mud",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.3",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Swift Hunt - Mud",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.08",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Blind Warrior - Mud",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Windstorm - White",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.42",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Swift Hunt - White",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.1",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Shadow Dance - White",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.4",
    AddonMod5: "0.4",
    AddonMod6: "0.4",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Blink - White",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.6",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Blind Warrior - White",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Windstorm - Blood",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.54",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Swift Hunt - Blood",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.12",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Shadow Dance - Blood",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.6",
    AddonMod5: "0.6",
    AddonMod6: "0.6",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "All Seeing - Blood",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "Coxcombed Clapper",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "WRAITH",
    Addon: "All Seeing - Spirit",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "SteelToe Boots",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.12",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Junkyard Air Filter",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "20",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Heavy Clutch",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Speed Limiter",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Dad's Boots",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.28",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Punctured Muffler",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Off-brand Motor Oil",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Death Engravings",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "1.38",
    AddonMod2: "0",
    AddonMod3: "-0.12",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Big Buckle",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Mother's Helpers",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Low Kickback Chains",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.28",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Leafy Mash",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Doom Engravings",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "1.84",
    AddonMod2: "0",
    AddonMod3: "-0.12",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Black Grease",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Tuned Carburettor",
    Rarity: "Very Rare",
    MoveSpeedMod: "-0.2",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.25",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Spiked Boots",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.44",
    AddonMod6: "-0.28",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Pighouse Gloves",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "LoPro Chains",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Apex Muffler",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HILLBILLY",
    Addon: "Iridescent Brick",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Wooden Horse",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "White Nit Comb",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Plaid Flannel",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Metal Spoon",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Pocket Watch",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0.13",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Dull Bracelet",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-4",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Dark Cincture",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.4",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Catatonic Boy's Treasure",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Bad Man Keepsake",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Spasmodic Breath",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Heavy Panting",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.2",
    AddonMod3: "4",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Fragile Wheeze",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.6",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Ataxic Respiration",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-0.25",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Anxious Gasp",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Kavanagh's Last Breath",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.3",
    AddonMod3: "6",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Jenner's Last Breath",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Campbell's Last Breath",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Bad Man's Last Breath",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Torn Bookmark",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NURSE",
    Addon: "Matchbox",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0.35",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Tacky Earrings",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.1",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Memorial Flower",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.11",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Boyfriend's Memo",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Blond Hair",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "10",
    AddonMod3: "0.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Reflective Fragment",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Jewellery",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.2",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Hair Brush",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "20",
    AddonMod3: "0.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Glass Fragment",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Dead Rabbit",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Mirror Shard",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Judith's Journal",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Jewellery Box",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.3",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "J. Myers Memorial",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.25",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Hair Bow",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "30",
    AddonMod3: "0.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Vanity Mirror",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Tombstone Piece",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Scratched Mirror",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Lock Of Hair",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "40",
    AddonMod3: "1",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Judith's Tombstone",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "MYERS",
    Addon: "Fragrant Tuft Of Hair",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "200",
    AddonMod3: "2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Rope Necklet",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.15",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Powdered Eggshell",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.25",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Dead Fly Mud",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Bog Water",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.1",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Pussy Willow Catkins",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Half Eggshell",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.3",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Dragonfly Wings",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.25",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Cypress Necklet",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.2",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Bloodied Water",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.2",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Willow Wreath",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Swamp Orchid Necklet",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.25",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Dried Cicada",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.3",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Cracked Turtle Egg",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.35",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Bloodied Mud",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.3",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Scarred Hand",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Rusty Shackles",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Grandma's Heart",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Disfigured Ear",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Waterlogged Shoe",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0.2",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HAG",
    Addon: "Mint Rag",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Mouldy Electrode",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Maple Knight",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Order - Class I",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Calm - Class I",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Polished Electrode",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "3",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Restraint - Class II",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Order - Class II",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-4",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Discipline - Class II",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "-0.1",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Calm - Class II",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Scrapped Tape",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Interview Tape",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "High Stimulus Electrode",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "4",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Restraint - Class III",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Discipline - Class III",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "-0.2",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Restraint - Carter's Notes",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Order - Carter's Notes",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-6",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Discipline - Carter's Notes",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "-0.3",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Calm - Carter's Notes",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Iridescent Queen",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DOCTOR",
    Addon: "Iridescent King",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Yellowed Cloth",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.1",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Coarse Stone",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Bandaged Haft",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.1",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Amanita Toxin",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Weighted Head",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Shiny Pin",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.05",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Oak Haft",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Manna Grass Braid",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.08",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Leather Loop",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Venomous Concoction",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Rusty Head",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Rose Root",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.2",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Flower Babushka",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.12",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Deerskin Gloves",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.2",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Wooden Fox",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Infantry Belt",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Glowing Concoction",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Begrimed Head",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Soldier's Puttee",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "HUNTRESS",
    Addon: "Iridescent Head",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Vegetable Oil",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.3",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Spark Plug",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-0.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Speed Limiter",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Chainsaw File",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Long Guide Bar",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "2",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Primer Bulb",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-1",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Knife Scratches",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.02",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0.12",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Homemade Muffler",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-1",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Chilli",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.25",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "The Grease",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "3",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "The Beast's Marks",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.03",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0.12",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Shop Lubricant",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Grisly Chains",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Begrimed Chains",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Rusted Chains",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Light Chassis",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Depth Gauge Rake",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "-0.02",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Award-winning Chilli",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Iridescent Flesh",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEATHERFACE",
    Addon: "Carburettor Tuning Guide",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "-0.02",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Wool Shirt",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.04",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Sheep Block",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Kid's Drawing",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Garden Rake",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Prototype Claws",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Outdoor Rope",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Nancy's Sketch",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.9",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Green Dress",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.04",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Cat Block",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Unicorn Block",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Paint Thinner",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Nancy's Masterpiece",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "1.35",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Jump Rope",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Blue Dress",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.04",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Pill Bottle",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Swing Chains",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Class Photo",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Z Block",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Red Paint Brush",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "FREDDY",
    Addon: "Black Box",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Shattered Syringe",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.25",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "John's Medical File",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.06",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Interlocking Razor",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Combat Straps",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.3",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Workshop Grease",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.5",
    AddonMod3: "0.25",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Utility Blades",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Razor Wires",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Last Will",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.06",
    AddonMod3: "0",
    AddonMod4: "0.33",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Face Mask",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Slow-Release Toxin",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Rusty Attachments",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Rules Set No.2",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Jigsaw's Annotated Plan",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Bag of Gears",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0.14",
    AddonMod8: "0.5",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Tampered Timer",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-20",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Jigsaw's Sketch",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Crate of Gears",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0.25",
    AddonMod8: "0.5",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Amanda's Secret",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Amanda's Letter",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PIG",
    Addon: "Video Tape",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "VHS Porn",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Robin Feather",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.4",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Party Bottle",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Fingerless Parade Gloves",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.25",
    AddonMod4: "0.25",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Thick Cork Stopper",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "-0.5",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Sticky Soda Bottle",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Starling Feather",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Solvent Jug",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "1",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Kerosene Can",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Sulphuric Acid Vial",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Spirit of Hartshorn",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0.1685",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Smelly Inner Soles",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.66",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Flask of Bleach",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.16",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Bottle Of Chloroform",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0.1737",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Garish Make-up Kit",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "2",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Ether 15 Vol%",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "1",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Cigar Box",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Cheap Gin Bottle",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Tattoo's Middle Finger",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "CLOWN",
    Addon: "Redhead's Pinky Finger",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Zori",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.05",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Shiawase Amulet",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Origami Crane",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.03",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Gifted Bamboo Comb",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.15",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "White Hair Ribbon",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.2",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Rin's Broken Watch",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.05",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Muddy Sports Day Cap",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.1",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Kaiun Talisman",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "1",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Juniper Bonsai",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Rusty Flute",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.0833",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Senko Hanabi",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Katana Tsuba",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.2",
    AddonMod6: "0.05",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Uchiwa",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Mother's Glasses",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Yakuyoke Amulet",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "-0.15",
    AddonMod2: "3.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Wakizashi Saya",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Furin",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Dried Cherry Blossom",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Mother-Daughter Ring",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.4",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "SPIRIT",
    Addon: "Kintsugi Teacup",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Smiley Face Pin",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Scratched Ruler",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Mischief List",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Friendship Bracelet",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Never-Sleep Pills",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "-0.6",
    AddonMod2: "10",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Mural Sketch",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.1",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Julie's Mix Tape",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Etched Ruler",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Defaced Smiley Pin",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "The Legion Pin",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Susie's Mix Tape",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "20",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Stolen Sketch Book",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Stylish Sunglasses",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Joey's Mix Tape",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Stab Wounds Study",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Frank's Mix Tape",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Filthy Blade",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "4",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "BFFs",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Iridescent Button",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "LEGION",
    Addon: "Fuming Mix Tape",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Prayer Tablet Fragment",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "40",
    AddonMod6: "1",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Olibanum Incense",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Limestone Seal",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "20",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Healing Salve",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.25",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Prophylactic Amulet",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Potent Tincture",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.4",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Haematite Seal",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "30",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Emetic Potion",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.3",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Blessed Apple",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "1",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Rubbing Oil",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Infected Emetic",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.4",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Incensed Ointment",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Exorcism Amulet",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "10",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Ashen Apple",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "1",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Worship Tablet",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.044",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Vile Emetic",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.1",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Severed Toe",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Devotee's Amulet",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "20",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Iridescent Seal",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "-20",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PLAGUE",
    Addon: "Black Incense",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Philly",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-0.2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Walleyes Matchbook",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-6",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Headlines Cut-outs",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.4",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Cheap Cologne",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "10",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Telephoto Lens",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Cinch Straps",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Olsen's Journal",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Olsen's Address Book",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Marked Map",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "2",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Olsen's Wallet",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Leather Knife Sheath",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.1",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Lasting Perfume",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Knife Belt Clip",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Chewed Pen",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Victim's Detailed Routine",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Night Vision Monocular",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Drop-Leg Knife Sheath",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Driver's License",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "-8",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Ghost Face Caught on Tape",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "GHOSTFACE",
    Addon: "Outdoor Security Camera",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Rotten Pumpkin",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Black Heart",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.15",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Rat Liver",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.035",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Rat Tail",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-0.35",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Sticky Lining",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "2.5",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Viscous Webbing",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0.16",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Rotten Green Tripe",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.15",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Mew's Guts",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-0.11",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Barb's Glasses",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.15",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Eleven's Soda",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Thorny Vines",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "1",
    AddonMod8: "0.11",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Brass Case Lighter",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Violet Waxcap",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0.5",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Deer Lung",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.3",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Lifeguard Whistle",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "-1",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Vermilion Webcap",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "3",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Upside Down Resin",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0.4",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Unknown Egg",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "-1.5",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Leprose Lichen",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEMOGORGON",
    Addon: "Red Moss",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "8",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Rotting Rope",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Paper Lantern",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Cracked Sakazuki",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "-0.5",
    AddonMod6: "-0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Blackened Toenail",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.3",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Polished Maedate",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0.1",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Ink Lion",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "-0.5",
    AddonMod6: "-0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "2",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Chipped Saihai",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "6",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Child's Wooden Sword",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "3",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Bloody Sash",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.6",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Yamaoka Sashimono",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "8",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Wooden Oni Mask",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Shattered Wakizashi",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0.2",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Scalped Topknot",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Kanai-Anzen Talisman",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.64",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Tear Soaked Tenugui",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "4",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Splintered Hull",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Lion Fang",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "10",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Akito's Crutch",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "1",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Renjiro's Bloody Glove",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONI",
    Addon: "Iridescent Family Crest",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Spit Polish Rag",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.25",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Snake Oil",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.1",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Rickety Chain",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Modified Ammo Belt",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-0.25",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Rusted Spike",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Poison Oak Leaves",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "1.5",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Marshal's Badge",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "-4",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Jaw Smasher",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.01",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Chewing Tobacco",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Warden's Keys",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-0.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Wanted Poster",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.025",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Tin Oil Can",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Honey Locust Thorn",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Bayshore's Gold Tooth",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.2",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Prison Chain",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Gold Creek Whiskey",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "-8",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Bayshore's Cigar",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-1",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Barbed Wire",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "3.5",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Iridescent Coin",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "DEATHSLINGER",
    Addon: "Hellshire Iron",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Lead Ring",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "10",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Dead Butterfly",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Copper Ring",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "1",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Black Strap",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.5",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Wax Doll",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "1",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Spearhead",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "1.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Leopard-Print Fabric",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Forgotten Videotape",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-3",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Cinderella Music Box",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "15",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Valtiel Sect Photograph",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-4",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Tablet of the Oppressor",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Misty Day, Remains of Judgement",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "1",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Mannequin Foot",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "20",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Burning Man Painting",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "1.5",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Scarlet Egg",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "1.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Rust-Coloured Egg",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Lost Memories Book",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Crimson Ceremony Book",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Obsidian Goblet",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PYRAMID HEAD",
    Addon: "Iridescent Seal of Metatron",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Placebo Tablet",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "-0.15",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Foxglove",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.25",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Compound 7",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Chipped Monocle",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Shredded Notes",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.33",
    AddonMod3: "-1",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Pustula Dust",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Plague Bile",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Canker Thorn",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Blighted Rat",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.04",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Umbra Salts",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Rose Tonic",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Compound 21",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Blighted Crow",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.06",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Adrenaline Vial",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-1",
    AddonMod3: "2",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.1",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Vigo's Journal",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Summoning Stone",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Soul Chemical",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Alchemist's Ring",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Iridescent Blight Tag",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "BLIGHT",
    Addon: "Compound 33",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Toy Sword",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.25",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Tiny Fingernail",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Soured Milk",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Cat Figurine",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Madeleine's Gloves",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Ceremonial Candelabrum",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0.2",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Cat's Eye",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Bloody Black Hood",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "-0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Baby Teeth",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Weighty Rattle",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Stale Biscuit",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-0.4",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Sewer Sludge",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "2",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Rusted Needle",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Madeleine's Scarf",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.3",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Victor's Soldier",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Spinning Top",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Forest Stew",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0.6",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Drop of Perfume",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Silencing Cloth",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TWINS",
    Addon: "Iridescent Pendant",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Trick Pouch",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "4",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Memento Blades",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Killing Part Chords",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.04",
    AddonMod2: "0.04",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Inferno Wires",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.25",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Tequila Moonrock",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "On Target Single",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "2",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Lucky Blade",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Ji-Woon's Autograph",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Caged Heart Shoes",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.1",
    AddonMod2: "0.1",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Melodious Murder",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Waiting For You Watch",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Ripper Brace",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "3",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Fizz-Spin Soda",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Bloody Boa",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "8",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Trick Blades",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Edge of Revival Album",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Diamond Cufflinks",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Cut Thru U Single",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Iridescent Photocard",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "TRICKSTER",
    Addon: "Death Throes Compilation",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Visitor Wristband",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "2",
    AddonMod5: "20",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "S.T.A.R.S. Field Combat Manual",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Damaged Syringe",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "2",
    AddonMod7: "1.5",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Brian's Intestine",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.25",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Zombie Heart",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Mikhail's Eye",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.35",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Marvin's Blood",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0.75",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Adrenaline Injector",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "3",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Admin Wristband",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "4",
    AddonMod5: "35",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Tyrant Gore",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0.5",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "T-Virus Sample",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "1",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Serotonin Injector",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Plant 43 Vines",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Licker Tongue",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "NE-a Parasite",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Jill's Sandwich",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Depleted Ink Ribbon",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Broken Recovery Coin",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Shattered S.T.A.R.S. Badge",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "NEMESIS",
    Addon: "Iridescent Umbrella Badge",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Leather Strip",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.15",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Lively Crickets",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.1",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Burning Candle",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-3",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Bent Nail",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "-2",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Wriggling Maggots",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0.15",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Spoiled Meal",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "2",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Skewered Rat",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "-0.45",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Liquified Gore",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "1",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Flickering Television",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "4",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Torture Pillar",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-6",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Slice of Frank",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Larry's Remains",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "2",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Larry's Blood",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "4",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Frank's Heart",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "8",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Original Pain",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Impaling Wire",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Greasy Black Lens",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Chatterer's Tooth",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Iridescent Lament Configuration",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "PINHEAD",
    Addon: "Engineer's Fang",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Vibrant Obituary",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "1.5",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Thick Tar",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0.5",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Oil Paints",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "1.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Choclo Corn",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Velvet Fabric",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Untitled Agony",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Still Life Crow",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "4",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Festering Carrion",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Automatic Drawing",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-1.5",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Thorny Nest",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Silver Bell",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "O Grief, O Lover",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Darkest Ink",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Charcoal Stick",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Severed Tongue",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Severed Hands",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Matias' Baby Shoes",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Ink Egg",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "1",
    AddonMod2: "-4",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Iridescent Feather",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ARTIST",
    Addon: "Garden of Rot",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Videotape Copy",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Old Newspaper",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0.33",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Mother's Mirror",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "2",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Cabin Sign",
    Rarity: "Common",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "-12",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Yoichi's Fishing Net",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "-0.12",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Well Stone",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "-6",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Sea-Soaked Cloth",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Reiko's Watch",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0.5",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Clump of Hair",
    Rarity: "Uncommon",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "-6",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Well Water",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "2",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Ring Drawing",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Rickety Pinwheel",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Mother's Comb",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Bloody Fingernails",
    Rarity: "Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "VCR",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Telephone",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Tape Editing Deck",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Distorted Photo",
    Rarity: "Very Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Remote Control",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  },
  {
    Killer: "ONRYO",
    Addon: "Iridescent Videotape",
    Rarity: "Ultra Rare",
    MoveSpeedMod: "0",
    AddonMod1: "0",
    AddonMod2: "0",
    AddonMod3: "0",
    AddonMod4: "0",
    AddonMod5: "0",
    AddonMod6: "0",
    AddonMod7: "0",
    AddonMod8: "0",
    AddonMod9: "0",
    AddonMod10: "0",
    AddonMod11: "0"
  }
]
