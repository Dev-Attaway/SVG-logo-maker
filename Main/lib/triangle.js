class Triangle extends Shape
{
    constructor( color)
    {
        super(color);
    }
    render()
    {
        return `<polygon points="250,60 100,400 400,400"
         cx="150" cy="100" r="80" class="triangle" style="fill=${this.color}"/>`
    }
    
}