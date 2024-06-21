const questions = [
    // Technical Questions
    {
        question: "What is the purpose of the anti-lock braking system (ABS) in a vehicle?",
        options: ["To lock the wheels during braking", "To prevent the wheels from locking during braking", "To increase the braking distance", "To decrease the braking power"],
        answer: "To prevent the wheels from locking during braking"
    },
    {
        question: "What should you do if your brakes fail while driving?",
        options: ["Shift to a higher gear", "Pump the brake pedal", "Turn off the engine", "Accelerate"],
        answer: "Pump the brake pedal"
    },
    {
        question: "What is the minimum tread depth required for tires?",
        options: ["1/32 inch", "2/32 inch", "3/32 inch", "4/32 inch"],
        answer: "2/32 inch"
    },
    {
        question: "What should you do if you experience a tire blowout while driving?",
        options: ["Swerve to the side of the road", "Brake immediately", "Grip the steering wheel firmly and slow down gradually", "Accelerate to maintain control"],
        answer: "Grip the steering wheel firmly and slow down gradually"
    },
    {
        question: "How should you handle a situation where your car starts to skid?",
        options: ["Brake hard", "Turn in the direction of the skid", "Turn in the opposite direction of the skid", "Accelerate"],
        answer: "Turn in the direction of the skid"
    },
    {
        question: "What should you do if your car starts to overheat?",
        options: ["Turn on the air conditioning", "Turn off the engine", "Speed up", "Turn on the heater"],
        answer: "Turn on the heater"
    },
    {
        question: "How often should you check your tire pressure?",
        options: ["Once a year", "Once a month", "Every six months", "Only before long trips"],
        answer: "Once a month"
    },
    {
        question: "What does a flashing yellow traffic light mean?",
        options: ["Stop and proceed with caution", "Proceed with caution", "Speed up to pass quickly", "Yield to all traffic"],
        answer: "Proceed with caution"
    },
    {
        question: "What should you do if your headlights suddenly go out while driving at night?",
        options: ["Speed up to get to your destination faster", "Turn off the car and wait for help", "Try the headlight switch a few times and then use emergency flashers if they don’t come on", "Keep driving as usual"],
        answer: "Try the headlight switch a few times and then use emergency flashers if they don’t come on"
    },
    {
        question: "What is the primary function of engine oil?",
        options: ["To cool the engine", "To clean the engine", "To lubricate engine parts", "To increase fuel efficiency"],
        answer: "To lubricate engine parts"
    },
    {
        question: "How often should you change your engine oil?",
        options: ["Every 3,000 miles", "Every 5,000 to 7,500 miles", "Once a year", "Only when the oil light comes on"],
        answer: "Every 5,000 to 7,500 miles"
    },
    {
        question: "What is the correct tire pressure for most vehicles?",
        options: ["15 psi", "20 psi", "30-35 psi", "40-45 psi"],
        answer: "30-35 psi"
    },
    {
        question: "What should you check before a long trip?",
        options: ["Only the fuel level", "Tire pressure, oil level, and coolant level", "Only the tire pressure", "Nothing, if the car is running fine"],
        answer: "Tire pressure, oil level, and coolant level"
    },
    {
        question: "What is the function of the catalytic converter in a vehicle?",
        options: ["Increase fuel efficiency", "Reduce exhaust emissions", "Improve engine performance", "Decrease engine noise"],
        answer: "Reduce exhaust emissions"
    },
    {
        question: "What should you do if you see a warning light on your dashboard while driving?",
        options: ["Ignore it", "Check your vehicle’s manual", "Continue driving and check later", "Stop immediately"],
        answer: "Check your vehicle’s manual"
    },
    {
        question: "What does the term 'blind spot' refer to?",
        options: ["The area you can see in your rearview mirror", "The area you can see in your side mirrors", "The area you cannot see in your mirrors", "The area directly in front of your vehicle"],
        answer: "The area you cannot see in your mirrors"
    },
    {
        question: "What is hydroplaning?",
        options: ["Driving on a wet road at high speed", "Driving with worn-out tires", "Sliding uncontrollably on a wet surface", "Turning a corner too quickly"],
        answer: "Sliding uncontrollably on a wet surface"
    },
    {
        question: "What should you do to avoid hydroplaning?",
        options: ["Speed up to avoid water", "Drive with worn tires", "Slow down and avoid puddles", "Turn sharply to maintain control"],
        answer: "Slow down and avoid puddles"
    },
    {
        question: "What is the purpose of the vehicle's differential?",
        options: ["Increase engine power", "Adjust the wheels' speed during turns", "Improve fuel efficiency", "Decrease braking distance"],
        answer: "Adjust the wheels' speed during turns"
    },
    {
        question: "What should you do if your windshield wipers fail during heavy rain?",
        options: ["Continue driving normally", "Pull over and stop until the rain lets up", "Speed up to get out of the rain quickly", "Use your emergency flashers and drive slowly"],
        answer: "Pull over and stop until the rain lets up"
    },
    
    // Alcohol-Related Questions
    {
        question: "What is the legal blood alcohol concentration (BAC) limit for drivers over 21?",
        options: ["0.02%", "0.05%", "0.08%", "0.10%"],
        answer: "0.08%"
    },
    {
        question: "What are the consequences of refusing a chemical test for alcohol when pulled over by the police?",
        options: ["No consequences", "A fine only", "License suspension and fines", "Community service"],
        answer: "License suspension and fines"
    },
    {
        question: "What is the primary effect of alcohol on driving skills?",
        options: ["Improves focus", "Increases reaction time", "Reduces coordination and reaction time", "Has no effect"],
        answer: "Reduces coordination and reaction time"
    },
    {
        question: "How long does it take for the body to process the alcohol in one standard drink?",
        options: ["30 minutes", "1 hour", "2 hours", "3 hours"],
        answer: "1 hour"
    },
    {
        question: "What should you do if you see a driver who appears to be under the influence of alcohol?",
        options: ["Follow them closely", "Try to stop them", "Keep a safe distance and call the police", "Ignore them"],
        answer: "Keep a safe distance and call the police"
    },
    {
        question: "What is considered a standard drink in terms of pure alcohol content?",
        options: ["10 grams", "14 grams", "20 grams", "25 grams"],
        answer: "14 grams"
    },
    {
        question: "Which of the following is a potential consequence of a DUI conviction?",
        options: ["License suspension", "Fines", "Jail time", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What should you do if you are planning to drink alcohol and need to get home?",
        options: ["Drive home carefully", "Walk home", "Take public transportation or use a ride-sharing service", "Sleep in your car"],
        answer: "Take public transportation or use a ride-sharing service"
    },
    {
        question: "What is the effect of mixing alcohol with medications?",
        options: ["Neutralizes the effects of alcohol", "Reduces the effects of alcohol", "Can intensify the effects of both alcohol and medications", "Has no effect"],
        answer: "Can intensify the effects of both alcohol and medications"
    },
    {
        question: "What should you do if you suspect a passenger in your car has been drinking alcohol?",
        options: ["Ignore it", "Ask them to leave the car", "Continue driving and deal with it later", "Drop them off at a safe location"],
        answer: "Drop them off at a safe location"
    },
    {
        question: "What should you do if you have had too much to drink and need to get home?",
        options: ["Drive home slowly", "Ask a sober friend to drive you", "Walk home", "Take a nap and then drive home"],
        answer: "Ask a sober friend to drive you"
    },
    {
        question: "What is the penalty for a first-time DUI offense?",
        options: ["Warning", "License suspension, fines, and possible jail time", "Community service", "Mandatory driving course"],
        answer: "License suspension, fines, and possible jail time"
    },
    {
        question: "What should you do if you see a friend trying to drive after drinking too much?",
        options: ["Let them drive", "Offer to drive them home", "Take their keys and find an alternative way home", "Ignore them"],
        answer: "Take their keys and find an alternative way home"
    },
    {
        question: "What is the legal BAC limit for commercial drivers?",
        options: ["0.02%", "0.04%", "0.08%", "0.10%"],
        answer: "0.04%"
    },
    {
        question: "What is the effect of alcohol on reaction time?",
        options: ["Improves reaction time", "Has no effect on reaction time", "Slows reaction time", "Speeds up reaction time"],
        answer: "Slows reaction time"
    },
    {
        question: "What is the legal BAC limit for drivers under 21?",
        options: ["0.02%", "0.05%", "0.08%", "0.10%"],
        answer: "0.02%"
    },
    {
        question: "What should you do if you are pulled over and have been drinking?",
        options: ["Try to talk your way out of it", "Refuse to take a breathalyzer test", "Cooperate with the officer and take the test", "Drive away quickly"],
        answer: "Cooperate with the officer and take the test"
    },
    {
        question: "How can alcohol affect your vision while driving?",
        options: ["Improves night vision", "Has no effect on vision", "Can cause blurred vision and reduce peripheral vision", "Increases alertness"],
        answer: "Can cause blurred vision and reduce peripheral vision"
    },
    {
        question: "What is the penalty for providing alcohol to a minor?",
        options: ["No penalty", "A warning", "Fines and possible jail time", "License suspension"],
        answer: "Fines and possible jail time"
    },
    {
        question: "How does alcohol consumption affect your ability to judge distances?",
        options: ["Improves distance judgment", "Has no effect on distance judgment", "Can impair your ability to judge distances accurately", "Improves peripheral vision"],
        answer: "Can impair your ability to judge distances accurately"
    },
    
    // Consequences Questions
    {
        question: "What could be the consequence of driving with a suspended license?",
        options: ["A warning", "No consequences", "A fine and possible jail time", "Reduced insurance rates"],
        answer: "A fine and possible jail time"
    },
    {
        question: "What should you do if you see a school bus stopped with its red lights flashing?",
        options: ["Proceed with caution", "Stop if you are on the same side of the road", "Stop regardless of your direction of travel", "Pass quickly"],
        answer: "Stop regardless of your direction of travel"
    },
    {
        question: "What should you do when approaching a railroad crossing with flashing lights?",
        options: ["Stop and wait for the train to pass", "Proceed with caution", "Speed up to cross before the train arrives", "Ignore the lights if no train is in sight"],
        answer: "Stop and wait for the train to pass"
    },
    {
        question: "What is the correct procedure for making a right turn on red?",
        options: ["Turn without stopping", "Stop and yield to all traffic and pedestrians", "Honk to alert others and proceed", "Turn only if there is a turn signal"],
        answer: "Stop and yield to all traffic and pedestrians"
    },
    {
        question: "What is the consequence of accumulating too many points on your driving record?",
        options: ["License suspension", "A warning letter", "Reduced insurance rates", "No consequences"],
        answer: "License suspension"
    },
    {
        question: "What should you do if you are pulled over by a police officer?",
        options: ["Speed up to avoid the officer", "Stop and stay in the vehicle", "Get out of the vehicle", "Ignore the officer"],
        answer: "Stop and stay in the vehicle"
    },
    {
        question: "What is the correct action when approaching a crosswalk?",
        options: ["Speed up to pass quickly", "Slow down and be prepared to stop", "Honk to alert pedestrians", "Ignore the crosswalk if no pedestrians are present"],
        answer: "Slow down and be prepared to stop"
    },
    {
        question: "What should you do if you see a yield sign at an intersection?",
        options: ["Proceed without slowing down", "Stop immediately", "Slow down and be prepared to stop", "Speed up"],
        answer: "Slow down and be prepared to stop"
    },
    {
        question: "What is the consequence of running a red light?",
        options: ["A warning", "A fine and points on your driving record", "License suspension", "No consequences"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are involved in a minor accident with no injuries?",
        options: ["Leave the scene immediately", "Exchange information with the other driver and file a report", "Ignore it and drive away", "Call the police and wait in your car"],
        answer: "Exchange information with the other driver and file a report"
    },
    {
        question: "What is the consequence of not wearing a seatbelt?",
        options: ["No consequence", "A warning", "A fine and possible injury in an accident", "Reduced insurance rates"],
        answer: "A fine and possible injury in an accident"
    },
    {
        question: "What should you do if you hit a parked car and can't find the owner?",
        options: ["Leave immediately", "Leave a note with your contact information", "Call the police and wait", "Ignore it and drive away"],
        answer: "Leave a note with your contact information"
    },
    {
        question: "What should you do if you are driving and see a pedestrian with a white cane?",
        options: ["Proceed normally", "Speed up to pass them", "Stop and yield the right-of-way", "Honk to alert them"],
        answer: "Stop and yield the right-of-way"
    },
    {
        question: "What is the consequence of passing a stopped school bus with its stop sign extended?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you see a construction zone ahead?",
        options: ["Speed up to pass quickly", "Slow down and follow any posted signs or instructions", "Ignore it", "Honk to alert workers"],
        answer: "Slow down and follow any posted signs or instructions"
    },
    {
        question: "What is the consequence of driving without insurance?",
        options: ["No consequence", "A warning", "Fines, license suspension, and possible jail time", "Reduced insurance rates"],
        answer: "Fines, license suspension, and possible jail time"
    },
    {
        question: "What should you do if you are involved in an accident with injuries?",
        options: ["Leave the scene immediately", "Call 911 and stay until help arrives", "Ignore it and drive away", "Exchange information and leave"],
        answer: "Call 911 and stay until help arrives"
    },
    {
        question: "What is the consequence of driving with an expired registration?",
        options: ["No consequence", "A warning", "A fine and possible impoundment of the vehicle", "Reduced insurance rates"],
        answer: "A fine and possible impoundment of the vehicle"
    },
    {
        question: "What should you do if you see a pedestrian crossing the street outside of a crosswalk?",
        options: ["Proceed normally", "Speed up to pass them", "Stop and yield the right-of-way", "Honk to alert them"],
        answer: "Stop and yield the right-of-way"
    },
    {
        question: "What is the consequence of driving without a valid driver's license?",
        options: ["No consequence", "A warning", "Fines, license suspension, and possible jail time", "Reduced insurance rates"],
        answer: "Fines, license suspension, and possible jail time"
    },
    {
        question: "What should you do if you are driving and see a bicyclist ahead?",
        options: ["Speed up to pass them quickly", "Proceed normally", "Slow down and give them space", "Honk to alert them"],
        answer: "Slow down and give them space"
    },
    {
        question: "What is the consequence of using a cell phone while driving without a hands-free device?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see a motorcycle ahead?",
        options: ["Speed up to pass them quickly", "Proceed normally", "Give them the same amount of space as you would a car", "Honk to alert them"],
        answer: "Give them the same amount of space as you would a car"
    },
    {
        question: "What is the consequence of not stopping for a school crossing guard?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see a large truck ahead?",
        options: ["Speed up to pass them quickly", "Proceed normally", "Give them extra space and be cautious", "Honk to alert them"],
        answer: "Give them extra space and be cautious"
    },
    {
        question: "What is the consequence of not using a child safety seat for a young child?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see an emergency vehicle with flashing lights approaching?",
        options: ["Speed up to get out of the way", "Pull over to the right and stop", "Ignore it", "Follow closely behind it"],
        answer: "Pull over to the right and stop"
    },
    {
        question: "What is the consequence of not yielding to pedestrians in a crosswalk?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see a traffic signal that is not working?",
        options: ["Proceed as if it were a green light", "Stop and then proceed when safe", "Ignore it and keep driving", "Honk to alert other drivers"],
        answer: "Stop and then proceed when safe"
    },
    {
        question: "What is the consequence of failing to stop for a stop sign?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see a vehicle stalled in your lane?",
        options: ["Speed up to pass them quickly", "Proceed normally", "Change lanes or slow down and pass carefully", "Honk to alert them"],
        answer: "Change lanes or slow down and pass carefully"
    },
    {
        question: "What is the consequence of failing to yield the right-of-way?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see a hazard in the road?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and maneuver around it safely", "Honk to alert other drivers"],
        answer: "Slow down and maneuver around it safely"
    },
    {
        question: "What is the consequence of speeding in a construction zone?",
        options: ["No consequence", "A warning", "Higher fines and points on your driving record", "Reduced insurance rates"],
        answer: "Higher fines and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see debris in the road?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and maneuver around it safely", "Honk to alert other drivers"],
        answer: "Slow down and maneuver around it safely"
    },
    {
        question: "What is the consequence of failing to obey traffic signals?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and your vehicle breaks down?",
        options: ["Leave it in the lane and walk away", "Move it to the side of the road and turn on your hazard lights", "Ignore it and keep driving", "Honk to alert other drivers"],
        answer: "Move it to the side of the road and turn on your hazard lights"
    },
    {
        question: "What is the consequence of driving with expired tags?",
        options: ["No consequence", "A warning", "A fine and possible impoundment of the vehicle", "Reduced insurance rates"],
        answer: "A fine and possible impoundment of the vehicle"
    },
    {
        question: "What should you do if you are driving and see an animal on the road?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and try to avoid hitting it", "Honk to alert other drivers"],
        answer: "Slow down and try to avoid hitting it"
    },
    {
        question: "What is the consequence of driving without proper registration?",
        options: ["No consequence", "A warning", "A fine and possible impoundment of the vehicle", "Reduced insurance rates"],
        answer: "A fine and possible impoundment of the vehicle"
    },
    {
        question: "What should you do if you are driving and see fog ahead?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and turn on your low-beam headlights", "Honk to alert other drivers"],
        answer: "Slow down and turn on your low-beam headlights"
    },
    {
        question: "What is the consequence of driving without proper insurance?",
        options: ["No consequence", "A warning", "Fines, license suspension, and possible jail time", "Reduced insurance rates"],
        answer: "Fines, license suspension, and possible jail time"
    },
    {
        question: "What should you do if you are driving and see ice on the road?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and drive cautiously", "Honk to alert other drivers"],
        answer: "Slow down and drive cautiously"
    },
    {
        question: "What is the consequence of driving with an invalid license?",
        options: ["No consequence", "A warning", "Fines, license suspension, and possible jail time", "Reduced insurance rates"],
        answer: "Fines, license suspension, and possible jail time"
    },
    {
        question: "What should you do if you are driving and see an obstruction in your lane?",
        options: ["Speed up to pass quickly", "Proceed normally", "Change lanes or slow down and pass carefully", "Honk to alert other drivers"],
        answer: "Change lanes or slow down and pass carefully"
    },
    {
        question: "What is the consequence of failing to stop for a pedestrian at a crosswalk?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see snow on the road?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and drive cautiously", "Honk to alert other drivers"],
        answer: "Slow down and drive cautiously"
    },
    {
        question: "What is the consequence of driving without a seatbelt?",
        options: ["No consequence", "A warning", "A fine and points on your driving record", "Reduced insurance rates"],
        answer: "A fine and points on your driving record"
    },
    {
        question: "What should you do if you are driving and see a flooded road ahead?",
        options: ["Speed up to pass quickly", "Proceed normally", "Turn around and find an alternate route", "Honk to alert other drivers"],
        answer: "Turn around and find an alternate route"
    },
    {
        question: "What is the consequence of driving without a valid inspection sticker?",
        options: ["No consequence", "A warning", "A fine and possible impoundment of the vehicle", "Reduced insurance rates"],
        answer: "A fine and possible impoundment of the vehicle"
    },
    {
        question: "What should you do if you are driving and see a pothole in your lane?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and maneuver around it safely", "Honk to alert other drivers"],
        answer: "Slow down and maneuver around it safely"
    },
    {
        question: "What is the consequence of driving with an expired driver’s license?",
        options: ["No consequence", "A warning", "A fine and possible impoundment of the vehicle", "Reduced insurance rates"],
        answer: "A fine and possible impoundment of the vehicle"
    },
    {
        question: "What should you do if you are driving and see an oncoming vehicle in your lane?",
        options: ["Speed up to pass quickly", "Proceed normally", "Slow down and move to the right to avoid a collision", "Honk to alert other drivers"],
        answer: "Slow down and move to the right to avoid a collision"
    },
    {
        question: "What is the minimum following distance you should maintain on the highway?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        answer: "3 seconds"
    },
    {
        question: "What is the effect of mixing alcohol with medication while driving?",
        options: ["No effect", "May cause dizziness and impair driving ability", "Improves driving ability", "Counteracts the effects of alcohol"],
        answer: "May cause dizziness and impair driving ability"
    },
    {
        question: "What should you do if you are involved in a hit-and-run accident?",
        options: ["Leave the scene", "Follow the other driver", "Call the police and stay at the scene", "Ignore it"],
        answer: "Call the police and stay at the scene"
    },
    {
        question: "What is the legal consequence of refusing a breathalyzer test when suspected of DUI?",
        options: ["No consequence", "A warning", "Automatic license suspension", "Reduced insurance rates"],
        answer: "Automatic license suspension"
    },
    {
        question: "What should you do when approaching an intersection with a yellow traffic signal?",
        options: ["Speed up to cross before it turns red", "Proceed normally", "Slow down and prepare to stop", "Ignore it"],
        answer: "Slow down and prepare to stop"
    },
    {
        question: "What is the effect of fatigue on driving?",
        options: ["Improves concentration", "Has no effect", "Slows reaction time and impairs judgment", "Makes you more alert"],
        answer: "Slows reaction time and impairs judgment"
    },
    {
        question: "What should you do if your brakes fail while driving?",
        options: ["Speed up to find help", "Turn off the engine", "Shift to a lower gear and use the emergency brake", "Honk to alert other drivers"],
        answer: "Shift to a lower gear and use the emergency brake"
    }
];
