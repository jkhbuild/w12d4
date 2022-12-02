class Api::BenchesController < ApplicationController
    def index
        @benches = Bench.all
        render json: @benches
    end

    def show
    end

    def create
        @bench = Bench.create(bench_params)
        if @bench.save
            render :show
    end
end
