const supabase = require("./util/supabase");

// Our standard serverless handler function
exports.handler = async (event) => {
  // Get all rows
  const { data: employees, error } = await supabase
    .from("employees")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify(error),
    };
  } else {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
        "Content-type": "application/json",
      },
      body: JSON.stringify(employees),
    };
  }
};
