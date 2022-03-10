<script>
    let active = true
    let email = 'james.booba@gmail.com'
    let name = 'james'
    $: !email & !name ? active=true : active=false
  </script>

<main class="container mt-12 bg-purple-200 rounded-lg py-4 text-blue-800 font-bold">
    <h2 class="text-xl">Contact Page</h2>
  <div >
    <form action="/api/contact" method="POST" id='myForm' class="flex flex-col gap-4 mt-6">
        <label for="name">Name</label>
          <input bind:value={name} type="text" name="name" placeholder="enter your name..." />
        <label for="email">Email</label>
          <input bind:value={email} type="email" name="email" placeholder="name@company.com" />
        
        <div class="text-center my-4">
          <button disabled={active} type="submit" class="outline-double rounded-xl w-1/2 hover:text-white hover:bg-blue-800">Send</button>
        </div>
    </form>
  </div>
  </main>