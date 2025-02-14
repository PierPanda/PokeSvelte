<script>
  import { page } from '$app/stores';
</script>

<h1>Error {$page.status}</h1>
<h3>{$page.error?.message}</h3>
