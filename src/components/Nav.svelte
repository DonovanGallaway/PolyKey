<script>
  import { each } from "svelte/internal";
  import { link } from "svelte-spa-router";


    const pageContents = [
        {
            text: 'Our Solutions', 
            link: '', 
            subPages: [
                {text: 'Fuse Calculator', link: ''}
            ]
        },
        {
            text: 'Industry Verticals',
            link: '',
            subPages: [
                {text: 'Festivals', link: ''},
                {text: 'Entertainment', link: ''},
                {text: 'Sports', link: ''},
                {text: 'Tradeshows and Conferences', link: ''} // Does this duplicate the nav bar item?
            ]
        },
        {
            text: 'Tradeshows and Conferences',
            link: '',
            subPages: []
        },
        {
            text: 'Featured Clients',
            link: '',
            subPages: []
        },
        {
            text: 'Collegiate Travel',
            link: '',
            subPages: []
        },
        {
            text: 'Careers',
            link: '', // link to CMS?
            subPages: []
        },
        {
            text: 'Fuse News',
            link: '', // Discuss idea of CMS
            subPages: []
        }
    ]
</script>

<nav>
    <div class='logo-placeholder'><a href='/'>FUSE TECHNOLOGIES</a></div>
    <div class='nav-links'>
        {#each pageContents as page}
            <a href={page.link} use:link><h3>{page.text}</h3></a>
        {/each}
    </div>
    <div class='sales-link'></div>
</nav>