

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center py-9 gap-6 text-white">
            <div>
                <img className="h-8 md:h-11" src="https://blog.apiki.com/wp-content/uploads/sites/2/2024/07/footer_logo.svg" alt="Logo Apiki"/>
            </div>
            <div class="flex flex-col text-center gap-1">
                <p>Copyright© 2025 | Apiki DevBlog - Todos os direitos reservados.</p>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/gabriela-srosa/" target="_blank"> Gabriela Rosa</a></p>
            </div>
        </footer>
    )
}