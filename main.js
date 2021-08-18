// Defining Table
    // Input(s) : A volume in Quarts
    // Processing : Convert the volume from Quartz to Litres
    // Output(s) : The volume converted to Litres

    function Quartz_to_ltr_func() {
        var user_input = document.getElementById('value_in_quartz').value;
        var output_div = document.getElementById('computed');
        process_input= parseFloat(user_input);

        //1 quart (qt) = 0.946353 liter (l)
        var result = process_input * 0.946353;
        output_div.innerHTML = user_input + " Quartz is Equivalent to " + result + " Litres";

    }