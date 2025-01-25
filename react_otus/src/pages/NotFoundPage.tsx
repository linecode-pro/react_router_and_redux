function NotFoundPage() {
    return (
        <div class="container">
            <div className="d-flex justify-content-center align-items-center vh-100 page">
                <div className="text-center">
                    <h1 className="text-danger">Страница не найдена - ошибка 404</h1>
                    <p>Это страница показывается в случае ошибки роутинга.</p>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;