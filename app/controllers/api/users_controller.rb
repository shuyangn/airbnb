class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
       else
            render {}    
       end
    end

    def user_params
        params.require(:user).permit(:username, :email, :first_name, :last_name, :password)
    end
    
end
