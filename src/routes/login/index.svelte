<script>
  let active = true
  let email, password = ''
  $: !email & !password ? active=true : active=false
</script>
<main class="container mt-12 bg-purple-200 rounded-lg py-4 text-blue-800 font-bold">
  <h2 class="text-xl">Login Page</h2>
<div >
  <form action="/login" method="post" id='myForm' class="flex flex-col gap-4 mt-6 ">
      <label for="email">Email</label>
        <input bind:value={email} type="email" name="email" placeholder="name@company.com" />
      <label for="password">Password</label>
        <input bind:value={password} type="password" name="password" placeholder="*******" />
      <div class="text-center my-4">
        <button disabled={active} type="submit" class="outline-double rounded-xl w-1/2 hover:text-white hover:bg-blue-800" >Login</button>
      </div>
  </form>
</div>
</main>

