const Category = async ({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug

    fetch(`http://localhost:3000/api/${slug}`)
    return(
        <div>
            category {slug}
        </div>
    )
}

export default Category;
