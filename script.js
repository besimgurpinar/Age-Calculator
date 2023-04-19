    function calculateAge() {
      const birthdate = new Date(document.getElementById("birthdate").value);
      const today = new Date();
      const diff = today.getTime() - birthdate.getTime();
      const age = new Date(diff);

      const year = age.getUTCFullYear() - 1970;
      const month = age.getUTCMonth();
      const day = age.getUTCDate() - 1;

      document.getElementById("result").innerHTML = `You are ${year} years, ${month} months, and ${day} days old.`;
    }
 