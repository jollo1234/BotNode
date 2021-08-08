const {Client} = require('discord.js');

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  	process.env['SUPABASE_URL'],
  	process.env['SUPABASE_PUBLIC_KEY']
)

async function f1() {
	var { data, error } = await supabase
    	.from('countries')
    	.select('*')
    	.limit(5);
	console.log(data);
};

f1();