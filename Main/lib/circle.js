class Circle extends Shape
{
    constructor(color)
    {
        super(color);
    }
    render()
    {
        return `<circle cx="150" cy="100" r="80" style="fill=${this.color}" />`;
    }
}