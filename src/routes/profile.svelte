<script context='module'>
    export const load = async ({fetch}) => {
        const res = await fetch('/api/post')
        const posts = await res.json()
        return {
            props: {posts}
        }
    }
</script>
<script >
    export let posts
</script>
PROFILE

<pre>{JSON.stringify(posts, null, 2)}</pre>
