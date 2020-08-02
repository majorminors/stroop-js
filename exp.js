
		////////////
		/* set up */
		////////////

		var instructions_on = 1; // you can turn off (0) the first few blocks of instructions if you want to test

		var num_blocks = 2; // will repeat each block of stimuli this number of times (blocked together)
	
		var stim_width = { // stimulus width in pixels - height is auto (i.e. will maintain aspect ratio)
			small: 100,
			mid: 500,
			large: 1000
		} 

		var timeline = []; // initialise timeline
		
		//////////////////
		/* instructions */
		//////////////////	

		var instructions = {
			type: 'html-keyboard-response',
			stimulus:'<p>In this experiment you will be asked to either report</p><br>'+
				'<p>the colour of a word, or the size of a word. In both cases,</p><br>'+
				'<p>you must ignore what the word says (i.e. try not to read the word).'+
				"<br><p>press any key to continue</p>"
		}

		/* intro to the recording trial */
		var participant_test = {
			type: 'image-audio-response',
			stimulus: 'stimuli/tiny-welcome.png',
			prompt: "<p>You first must allow microphone access in your browser.<br>Once that's done, recording will start. You can see the recording indicator at the bottom right of the screen. Test it out!<br><br> This example trial records for 6 seconds. Speak, and at the end you can play it back or rerecord as you like.<br>In the experiment itself, you will not be able to playback, or rerecord.</p>",
			allow_playback: true,
			buffer_length: 6000,
			wait_for_mic_approval: true,
			recording_light: '<div style="position: fixed; bottom: 0; right: 0;">recording...</div>',
			recording_light_off: '<div style="position: fixed; bottom: 0; right: 0;">not recording...</div>'
		}

		/* push those to the timeline, if instructions are on */
		if (instructions_on == 1) {
			timeline.push(instructions);
			timeline.push(participant_test);
		}

		//////////////////
		/* trial blocks */
		//////////////////

		/* report colour instructions */
		var size_instructions = {
			type: 'html-keyboard-response',
			stimulus: '<p>report size</p>',
			choices: jsPsych.NO_KEYS,
			trial_duration: 500
		}

		/* report size instructions */
		var colour_instructions = {
			type: 'html-keyboard-response',
			stimulus: '<p>report colour</p>',
			choices: jsPsych.NO_KEYS,
			trial_duration: 500
		}

		/* stroop task */
		var stroop_task = {
			timeline: [
				{
					type: 'html-keyboard-response',
					stimulus: '<div style="font-size:60px;">+</div>',
					choices: jsPsych.NO_KEYS,
					trial_duration: 300
				},
				{
					type: 'image-audio-response',
					stimulus: jsPsych.timelineVariable('stim_path'),
					allow_playback: false,
					buffer_length: 2000,
					wait_for_mic_approval: false,
					stimulus_width: jsPsych.timelineVariable('stim_size'),
					recording_light: '<div style="position: fixed; bottom: 0; right: 0;">recording...</div>',
					recording_light_off: '<div style="position: fixed; bottom: 0; right: 0;">not recording...</div>',
					data: jsPsych.timelineVariable('add_data')
				}
			],
			timeline_variables: [
				{stim_path: 'stimuli/red-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'red-red-small'}},
				{stim_path: 'stimuli/red-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'red-red-small'}},
				{stim_path: 'stimuli/red-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'red-blue-small'}},
				{stim_path: 'stimuli/red-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'red-green-small'}},
				{stim_path: 'stimuli/blue-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'blue-blue-small'}},
				{stim_path: 'stimuli/blue-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'blue-blue-small'}},
				{stim_path: 'stimuli/blue-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'blue-red-small'}},
				{stim_path: 'stimuli/blue-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'blue-green-small'}},
				{stim_path: 'stimuli/green-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'green-green-small'}},
				{stim_path: 'stimuli/green-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'green-green-small'}},
				{stim_path: 'stimuli/green-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'green-red-small'}},
				{stim_path: 'stimuli/green-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'green-blue-small'}},
				{stim_path: 'stimuli/red-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'red-red-mid'}},
				{stim_path: 'stimuli/red-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'red-red-mid'}},
				{stim_path: 'stimuli/red-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'red-blue-mid'}},
				{stim_path: 'stimuli/red-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'red-green-mid'}},
				{stim_path: 'stimuli/blue-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'blue-blue-mid'}},
				{stim_path: 'stimuli/blue-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'blue-blue-mid'}},
				{stim_path: 'stimuli/blue-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'blue-red-mid'}},
				{stim_path: 'stimuli/blue-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'blue-green-mid'}},
				{stim_path: 'stimuli/green-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'green-green-mid'}},
				{stim_path: 'stimuli/green-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'green-green-mid'}},
				{stim_path: 'stimuli/green-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'green-red-mid'}},
				{stim_path: 'stimuli/green-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'green-blue-mid'}},
				{stim_path: 'stimuli/red-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'red-red-large'}},
				{stim_path: 'stimuli/red-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'red-red-large'}},
				{stim_path: 'stimuli/red-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'red-blue-large'}},
				{stim_path: 'stimuli/red-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'red-green-large'}},
				{stim_path: 'stimuli/blue-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'blue-blue-large'}},
				{stim_path: 'stimuli/blue-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'blue-blue-large'}},
				{stim_path: 'stimuli/blue-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'blue-red-large'}},
				{stim_path: 'stimuli/blue-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'blue-green-large'}},
				{stim_path: 'stimuli/green-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'green-green-large'}},
				{stim_path: 'stimuli/green-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'green-green-large'}},
				{stim_path: 'stimuli/green-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'green-red-large'}},
				{stim_path: 'stimuli/green-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'green-blue-large'}}, 
			],
			randomize_order: true,
			repetitions: num_blocks
		}
		
		/* grab all the image paths, so we can preload them */
		var stroop_image_paths = []; // init the variable
		for (i = 0; i < stroop_task.timeline_variables.length; i++) {
			stroop_image_paths[i] = stroop_task.timeline_variables[i].stim_path;
		}

		/* false font task */
		var false_font_task = {
			timeline: [
				{
					type: 'html-keyboard-response',
					stimulus: '<div style="font-size:60px;">+</div>',
					choices: jsPsych.NO_KEYS,
					trial_duration: 300
				},
				{
					type: 'image-audio-response',
					stimulus: jsPsych.timelineVariable('stim_path'),
					allow_playback: false,
					buffer_length: 2000,
					wait_for_mic_approval: false,
					stimulus_width: jsPsych.timelineVariable('stim_size'),
					recording_light: '<div style="position: fixed; bottom: 0; right: 0;">recording...</div>',
					recording_light_off: '<div style="position: fixed; bottom: 0; right: 0;">not recording...</div>',
					data: jsPsych.timelineVariable('add_data')
				}
			],
			timeline_variables: [
				{stim_path: 'stimuli/ffred-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffred-red-small'}},
				{stim_path: 'stimuli/ffred-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffred-red-small'}},
				{stim_path: 'stimuli/ffred-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffred-blue-small'}},
				{stim_path: 'stimuli/ffred-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffred-green-small'}},
				{stim_path: 'stimuli/ffblue-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffblue-blue-small'}},
				{stim_path: 'stimuli/ffblue-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffblue-blue-small'}},
				{stim_path: 'stimuli/ffblue-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffblue-red-small'}},
				{stim_path: 'stimuli/ffblue-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffblue-green-small'}},
				{stim_path: 'stimuli/ffgreen-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffgreen-green-small'}},
				{stim_path: 'stimuli/ffgreen-green.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffgreen-green-small'}},
				{stim_path: 'stimuli/ffgreen-red.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffgreen-red-small'}},
				{stim_path: 'stimuli/ffgreen-blue.svg', stim_size: stim_width.small, add_data: {stimulus: 'ffgreen-blue-small'}},
				{stim_path: 'stimuli/ffred-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffred-red-mid'}},
				{stim_path: 'stimuli/ffred-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffred-red-mid'}},
				{stim_path: 'stimuli/ffred-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffred-blue-mid'}},
				{stim_path: 'stimuli/ffred-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffred-green-mid'}},
				{stim_path: 'stimuli/ffblue-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffblue-blue-mid'}},
				{stim_path: 'stimuli/ffblue-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffblue-blue-mid'}},
				{stim_path: 'stimuli/ffblue-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffblue-red-mid'}},
				{stim_path: 'stimuli/ffblue-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffblue-green-mid'}},
				{stim_path: 'stimuli/ffgreen-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffgreen-green-mid'}},
				{stim_path: 'stimuli/ffgreen-green.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffgreen-green-mid'}},
				{stim_path: 'stimuli/ffgreen-red.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffgreen-red-mid'}},
				{stim_path: 'stimuli/ffgreen-blue.svg', stim_size: stim_width.mid, add_data: {stimulus: 'ffgreen-blue-mid'}},
				{stim_path: 'stimuli/ffred-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffred-red-large'}},
				{stim_path: 'stimuli/ffred-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffred-red-large'}},
				{stim_path: 'stimuli/ffred-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffred-blue-large'}},
				{stim_path: 'stimuli/ffred-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffred-green-large'}},
				{stim_path: 'stimuli/ffblue-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffblue-blue-large'}},
				{stim_path: 'stimuli/ffblue-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffblue-blue-large'}},
				{stim_path: 'stimuli/ffblue-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffblue-red-large'}},
				{stim_path: 'stimuli/ffblue-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffblue-green-large'}},
				{stim_path: 'stimuli/ffgreen-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffgreen-green-large'}},
				{stim_path: 'stimuli/ffgreen-green.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffgreen-green-large'}},
				{stim_path: 'stimuli/ffgreen-red.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffgreen-red-large'}},
				{stim_path: 'stimuli/ffgreen-blue.svg', stim_size: stim_width.large, add_data: {stimulus: 'ffgreen-blue-large'}}, 
			],
			randomize_order: true,
			repetitions: num_blocks
		}

		/* grab all the image paths, so we can preload them */
		var falsefont_image_paths = []; // init the variable
		for (i = 0; i < false_font_task.timeline_variables.length; i++) {
			falsefont_image_paths[i] = false_font_task.timeline_variables[i].stim_path;
		}

		/* push tasks to timeline */
		
		var stroop_colour_proc = [colour_instructions,stroop_task]; // precede stroop with colour instructions
		var stroop_size_proc = [size_instructions,stroop_task]; // precede stroop with size instructions
		var falsefont_colour_proc = [colour_instructions,false_font_task]; // precede false fonts with colour instructions
		
		var unshuffled_procedure = [stroop_colour_proc, stroop_size_proc, falsefont_colour_proc]; // place all into a single array

		function shuffle(array) { // fisher-yates shuffler function
			var m = array.length, t, i;

			// While there remain elements to shuffle…
			while (m) {

				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			return array;
		}

		var shuffled_procedure = shuffle(unshuffled_procedure).flat(); // shuffle the procedure, and flatten it into one layer
		
		for (i = 0; i < shuffled_procedure.length; i++) { // loop through the shuffled and flattened procedure array, and push each jsPsych trial block to the timeline
			timeline.push(shuffled_procedure[i]);
		}

		/* individual blocks for testing */ 
		//timeline.push(size_instructions);
		//timeline.push(colour_instructions);
		//timeline.push(stroop_task);
		//timeline.push(false_font_task);
